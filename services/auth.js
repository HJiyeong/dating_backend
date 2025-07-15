const jsonWebToken = require('jsonwebtoken');
const {collection} = require('./db')
const crypto = require('crypto');
const config = require('../config')['dev'];
async function sign(user_id, name) {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });
    const encryptedUserId = crypto.publicEncrypt(publicKey, Buffer.from(user_id)).toString('base64');
    const today = new Date()
    const coll = await collection('jwt');
    const doc  = {
        user_id: encryptedUserId,
        privateKey: privateKey.export({ type: 'pkcs1', format: 'der' }),
        publicKey: publicKey.export({ type: 'pkcs1', format: 'der' }),
        created_at: today,
        expired_at: new Date(new Date().setDate(today.getDate() + 7))
    }
    await coll.insertOne(doc)
    return jsonWebToken.sign({user_id: encryptedUserId, name: name}, config.token.secret, config.token.options)
}
async function verify(token) {
    if(!token) return false;
    const decoded =  jsonWebToken.verify(token.replace('Bearer ', ''), config.token.secret, config.token.options);
    const today = new Date()
    const coll = await collection('jwt');
    const find = await coll.findOne({user_id: decoded.user_id, expired_at: {$gte: today}});
    if(!find) throw 'invalid_jwt'
    const privateKey = crypto.createPrivateKey({
        key: find.privateKey.buffer,
        format: 'der',
        type: 'pkcs1',
    });

    const decryptedUserId = crypto.privateDecrypt(privateKey, Buffer.from(decoded.user_id, 'base64')).toString();
    return {...decoded, user_id: decryptedUserId}
}
module.exports = {sign, verify}