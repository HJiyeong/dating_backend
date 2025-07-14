const {collection} = require('../services/db')
const {generateId} = require('../utils/generateId')
const { ObjectId } = require("mongodb");
const uploadChapter = async(num, title='') => {
	const coll = await collection('chapter')
	const doc = {
		number: num,
		title: title,
		event:[],
		created_at: new Date(),
		updated_at: new Date(),
		removed_at: null
	}
	await coll.insertOne(doc)
}
const updateChapterTitle = async(chapter_id, title='') => {
	const coll = await collection('chapter')
	await coll.updateOne({_id: new ObjectId(chapter_id)}, {$set: {title: title}})
}
const uploadFileData = async(name, bucket, size, key, mimetype, type) => {
	const coll = await collection('file')
	const doc = {
		type: type,
		key: key,
		name: name,
		bucket: bucket,
		mimetype: mimetype,
		size: size,
		created_at: new Date(),
		updated_at: new Date(),
		removed_at: null
	}
	await coll.insertOne(doc)
}
const uploadCharacter = async(name, mbti, college, age, concept) => {
	const coll = await collection('character')
	const doc = {
		name: name,
		mbti: mbti,
		college: college,
		age: age,
		concept: concept,
		main_image_id:'',
		created_at: new Date(),
		updated_at: new Date(),
		removed_at: null
	}
	await coll.insertOne(doc)
}
const updateCharacter = async(character_id, data) => {
	const coll = await collection('character')
	const query = {}
	if(data.name) query['name'] = data.name
	if(data.mbti) query['mbti'] = data.mbti
	if(data.college) query['college'] = data.college
	if(data.age) query['age'] = data.age
	if(data.concept) query['concept'] = data.concept
	if(data.main_image_id) query['concept'] = data.main_image_id
	await coll.updateOne({_id: new ObjectId(character_id)}, {$set: query})
}
const uploadScenario = async(chapter_id, next_scene_id, event) => {
	const doc = {
		chapter_id: chapter_id,
		next_scene_id: next_scene_id,
		event: event,
		scenario: [
			{}
		],
		created_at: new Date(),
		updated_at: new Date(),
		removed_at: null	
	}
}
const initChar = async() => {
	await uploadCharacter('주인공', 'INTP', '카이스트', 23, '모솔이라 연애를 할 수 있지 않을까 기대하며 몰입캠프에 왔음. 하지만 쑥맥이라 우당탕탕 쉽지 않은 느낌.')
	await uploadCharacter('서연', 'ISTJ', '한국대', 23, '코딩을 잘하지만 무뚝뚝하고 연애 감정에 서툼.')
	await uploadCharacter('하린', 'ENFP', '한국대', 23, '코딩은 서툴지만 활발하고 친절한 분위기 메이커. 연애에 대한 환상이 있음.')
	await uploadCharacter('지후', 'ESTJ', '카이스트', 23, '잘생기고 실력도 좋아 인기 많음.')
	await uploadCharacter('진섭', 'ESTP', '카이스트', 23, '말은 많지만 외면당하는 존재, 눈치 없고 사회성 없지만 시끄러움')
	await uploadCharacter('넙죽이', '', '카이스트', 0, '분반장')
}
const initChapter = async() => {
	await uploadChapter(1, '코딩보다 어려운 첫 만남') //68747676bdeacc83e59d29b5
	await uploadChapter(2, '너는 내 타입이야... 코드 말고') //68747676bdeacc83e59d29b6
	await uploadChapter(3, '팀원이냐... 그 이상이냐') //68747676bdeacc83e59d29b7
	await uploadChapter(4, '최종선택') //68747677bdeacc83e59d29b8
}
const eventList = [
	{
		chapter_id: '68747676bdeacc83e59d29b5', 
		event:[
			{title:'내 팀메이트는 누구?'},
			{title:'같이 있지만 먼 거리'},
			{title:'가까워지려 하지만 쉽지 않다'},
			{title:'술에 취한 그녀'},
			{title:'다시 돌아온 그녀'},
		]
	},
	{
		chapter_id: '68747676bdeacc83e59d29b6', 
		event:[
			{title:'새로운 팀메이트는 누구?'},
			{title:'천방지축 그녀'},
			{title:'신경쓰이는 그녀'},
			{title:'주말 데이트'},
			{title:'조용한 밤, 나란히 걷는 발걸음'},
		]
	},
	{
		chapter_id: '68747676bdeacc83e59d29b7', 
		event:[
			{title:'팀: 룰 브레이커'},
			{title:'갈등의 시작'},
			{title:'태풍의 눈'},
			{title:'본격적인 연애 전선'},
			{title:'복잡해지는 마음'},
		]
	},
	{
		chapter_id: '68747677bdeacc83e59d29b8', 
		event:[
			{title:'최종선택'},
		]
	},
]
const initChapterEvent = async() => {
	const coll = await collection('chapter')
	for(const data of eventList){
		try{
			const event = data.event.map((data2, index) => {
				return {
					id: generateId(),
					number: index + 1,
					title: data2.title
				}
			})
			await coll.updateOne({_id: new ObjectId(data.chapter_id)}, {$set: {event: event}})
		}
		catch(e){
			console.log(e)
		}
	}
}
const test = async() => {
	console.log('start')
	await initChapterEvent()
	console.log('finish')
}
test()