const jsonWebToken = require('jsonwebtoken');
const crypto = require('crypto');
async function sign(user_id) {
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
    return jsonWebToken.sign({user_id: encryptedUserId}, config.token.secret, config.token.options)
}
module.exports = {sign}