const {collection} = require('../services/db')
const {generateId} = require('../utils/generateId')
const { ObjectId } = require("mongodb");
const {chapter1Event1, chapter1Event2, chapter1Event3, chapter1Event4, chapter1Event5, 
	chapter2Event1, chapter2Event2,chapter2Event3, chapter2Event4, chapter2Event5,
	chapter3Event1, chapter3Event2,chapter3Event3, chapter3Event4, chapter3Event5,} = require('../utils/scenarioList')
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

const hero = '687475d50655ca93c3840443'
const heroine1 = '687475d50655ca93c3840444'
const heroine2 = '687475d50655ca93c3840445'
const villian1 = '687475d50655ca93c3840446'
const villian2 = '687475d50655ca93c3840447'
const operator = '687475d60655ca93c3840448'
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
const imageBucket = 'ai-o-siranai'
const audioBucket = 'ai-o-siranai-audio'

const uploadFileData = async(name, bucket, size, key, mimetype, type) => {
	const coll = await collection('file')
	const isExist = await coll.findOne({key: key})
	if(!isExist){
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
}
const keyExample = 'ai-o-siranai/ch-1/event-3/line'
const imagePushData = [
	{name:'seoyeon_angry.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'seoyeon_angry.png', type:'character'},//서연 시작
	{name:'seoyeon_back.png', bucket: imageBucket, size: '2.3MB', mimetype:'png', key:'seoyeon_back.png', type:'character'},
	{name:'seoyeon_basic.png', bucket: imageBucket, size: '2.2MB', mimetype:'png', key:'seoyeon_basic.png', type:'character'},
	{name:'seoyeon_detail.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'seoyeon_detail.png', type:'character'},
	{name:'seoyeon_lighit_smile.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'seoyeon_lighit_smile.png', type:'character'},
	{name:'seoyeon_embrrass.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'seoyeon_embrrass.png', type:'character'},
	{name:'seoyeon_home.png', bucket: imageBucket, size: '2.6MB', mimetype:'png', key:'seoyeon_home.png', type:'character'},
	{name:'seoyeon_shame.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'seoyeon_shame.png', type:'character'},
	{name:'seoyeon_side.png', bucket: imageBucket, size: '2.3MB', mimetype:'png', key:'seoyeon_side.png', type:'character'},
	{name:'seoyeon_smile.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'seoyeon_smile.png', type:'character'},
	{name:'seoyeon_head.png', bucket: imageBucket, size: '944.2KB', mimetype:'png', key:'seoyeon_head.png', type:'character'},  //서연 끝

	{name:'harin_angry.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_angry.png', type:'character'}, //하린 시작
	{name:'harin_back.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'harin_back.png', type:'character'}, 
	{name:'harin_basic.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_basic.png', type:'character'},
	{name:'harin_detail.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_detail.png', type:'character'},
	{name:'harin_embarrass.png', bucket: imageBucket, size: '2.3MB', mimetype:'png', key:'harin_embarrass.png', type:'character'},
	{name:'harin_half_back.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'harin_half_back.png', type:'character'},
	{name:'harin_home.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_home.png', type:'character'},
	{name:'harin_shame.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_shame.png', type:'character'},
	{name:'harin_side.png', bucket: imageBucket, size: '2.4MB', mimetype:'png', key:'harin_side.png', type:'character'},
	{name:'harin_smile.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_smile.png', type:'character'},
	{name:'harin_upset.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'harin_upset.png', type:'character'},
	{name:'harin_head.png', bucket: imageBucket, size: '776.2KB', mimetype:'png', key:'harin_head.png', type:'character'}, // 하린 끝

	{name:'hero_basic.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'hero_basic.png', type:'character'}, //주인공
	{name:'jihoo_basic.png', bucket: imageBucket, size: '2.1MB', mimetype:'png', key:'jihoo_basic.png', type:'character'}, //지후
	{name:'jinseop_basic.png', bucket: imageBucket, size: '1.8MB', mimetype:'png', key:'jinseop_basic.png', type:'character'}, //진섭
	{name:'nubzuki_basic.PNG', bucket: imageBucket, size: '1.7MB', mimetype:'PNG', key:'nubzuki_basic.PNG', type:'character'}, //넙죽이

	{name:'hero_head.png', bucket: imageBucket, size: '2.5MB', mimetype:'png', key:'hero_head.png', type:'character'}, //주인공
	{name:'jihoo_head.png', bucket: imageBucket, size: '2.1MB', mimetype:'png', key:'jihoo_head.png', type:'character'}, //지후
	{name:'jinseop_head.png', bucket: imageBucket, size: '1.8MB', mimetype:'png', key:'jinseop_head.png', type:'character'}, //진섭
	{name:'nubzuki_head.png', bucket: imageBucket, size: '1.7MB', mimetype:'png', key:'nubzuki_head.png', type:'character'}, //넙죽이

	{name:'jihoo_detail.png', bucket: imageBucket, size: '2.1MB', mimetype:'png', key:'jihoo_detail.png', type:'character'}, //지후
	{name:'jinseop_detail.png', bucket: imageBucket, size: '1.8MB', mimetype:'png', key:'jinseop_detail.png', type:'character'}, //진섭
	{name:'nubzuki_detail.png', bucket: imageBucket, size: '1.7MB', mimetype:'png', key:'nubzuki_detail.png', type:'character'}, //넙죽이

	{name:'blackboard_harin.jpg', bucket: imageBucket, size: '1.6MB', mimetype:'jpg', key:'blackboard_harin.jpg', type:'background'}, //배경시작
	{name:'blackboard_seoyeon.jpg', bucket: imageBucket, size: '1.4MB', mimetype:'jpg', key:'blackboard_seoyeon.jpg', type:'background'},
	{name:'cafe.jpg', bucket: imageBucket, size: '2.7MB', mimetype:'jpg', key:'cafe.jpg', type:'background'},
	{name:'cafeteria.jpg', bucket: imageBucket, size: '2.2MB', mimetype:'jpg', key:'cafeteria.jpg', type:'background'},
	{name:'chicken.jpg', bucket: imageBucket, size: '559.8KB', mimetype:'jpg', key:'chicken.jpg', type:'background'},
	{name:'city.jpg', bucket: imageBucket, size: '1.1MB', mimetype:'jpg', key:'city.jpg', type:'background'},
	{name:'classroom_signboard.jpg', bucket: imageBucket, size: '1.9MB', mimetype:'jpg', key:'classroom_signboard.jpg', type:'background'},
	{name:'classroom.jpg', bucket: imageBucket, size: '1.8MB', mimetype:'jpg', key:'classroom.jpg', type:'background'},
	{name:'e3_building.jpg', bucket: imageBucket, size: '4.0MB', mimetype:'jpg', key:'e3_building.jpg', type:'background'},
	{name:'entrace.jpg', bucket: imageBucket, size: '2.7MB', mimetype:'jpg', key:'entrace.jpg', type:'background'},
	{name:'entrance_rounge1.jpg', bucket: imageBucket, size: '2.5MB', mimetype:'jpg', key:'entrance_rounge1.jpg', type:'background'},
	{name:'entrance_rounge2.jpg', bucket: imageBucket, size: '3.1MB', mimetype:'jpg', key:'entrance_rounge2.jpg', type:'background'},
	{name:'goose.jpg', bucket: imageBucket, size: '3.0MB', mimetype:'jpg', key:'goose.jpg', type:'background'},
	{name:'ki_building.jpg', bucket: imageBucket, size: '3.1MB', mimetype:'jpg', key:'ki_building.jpg', type:'background'},
	{name:'middle_rounge.jpg', bucket: imageBucket, size: '2.4MB', mimetype:'jpg', key:'middle_rounge.jpg', type:'background'},
	{name:'movie.jpg', bucket: imageBucket, size: '48.7KB', mimetype:'jpg', key:'movie.jpg', type:'background'},
	{name:'night_light1.jpg', bucket: imageBucket, size: '2.1MB', mimetype:'jpg', key:'night_light1.jpg', type:'background'},
	{name:'night_light2.jpg', bucket: imageBucket, size: '1.9MB', mimetype:'jpg', key:'night_light2.jpg', type:'background'},
	{name:'passageway.jpg', bucket: imageBucket, size: '1.5MB', mimetype:'jpg', key:'passageway.jpg', type:'background'},
	{name:'river1.jpg', bucket: imageBucket, size: '4.4MB', mimetype:'jpg', key:'river1.jpg', type:'background'},
	{name:'river2.jpg', bucket: imageBucket, size: '3.4MB', mimetype:'jpg', key:'river2.jpg', type:'background'},
	{name:'street.jpg', bucket: imageBucket, size: '5.0MB', mimetype:'jpg', key:'street.jpg', type:'background'},
	{name:'sungsimdang.jpg', bucket: imageBucket, size: '108.6KB', mimetype:'jpg', key:'sungsimdang.jpg', type:'background'},
	{name:'kakao_talk.png', bucket: imageBucket, size: '188.6KB', mimetype:'jpg', key:'kakao_talk.png', type:'background'}, //배경끝
]
const audioPUshData = [
	{name:'background_basic1.mp3', bucket: audioBucket, size: '13.7MB', mimetype:'mp3', key:'background_basic1.mp3', type:'background'},
	{name:'background_basic2.mp3', bucket: audioBucket, size: '4.2MB', mimetype:'mp3', key:'background_basic2.mp3', type:'background'},
	{name:'background_basic3.mp3', bucket: audioBucket, size: '13.6MB', mimetype:'mp3', key:'background_basic3.mp3', type:'background'},
	{name:'serious1.mp3', bucket: audioBucket, size: '7.6MB', mimetype:'mp3', key:'serious1.mp3', type:'background'},
	{name:'serious2.mp3', bucket: audioBucket, size: '8.2MB', mimetype:'mp3', key:'serious2.mp3', type:'background'},
	{name:'serious3.mp3', bucket: audioBucket, size: '3.8MB', mimetype:'mp3', key:'serious3.mp3', type:'background'},
	{name:'despair.mp3', bucket: audioBucket, size: '2.1MB', mimetype:'mp3', key:'despair.mp3', type:'background'},
	{name:'dokidoki.mp3', bucket: audioBucket, size: '4.1MB', mimetype:'mp3', key:'dokidoki.mp3', type:'background'},
]
const pushFile = async() => {
	for(const item of imagePushData){
		try{
			await uploadFileData(item.name, item.bucket, item.size, item.key, item.mimetype, item.type)
		}
		catch(e){
			console.log(e)
		}
	}
}
const test = async() => {
	console.log('start')
	// const coll = await collection('scene')
	// const doc = {...chapter3Event5, created_at: new Date(), updated_at: new Date(), removed_at: null}
	// const {insertedId} = await coll.insertOne(doc)
	await pushFile()
	console.log(generateId())
	// const coll = await collection('scene')
	// const doc = {...chapter3Event5, created_at: new Date(), updated_at: new Date(), removed_at: null}
	// const {insertedId} = await coll.insertOne(doc)
	console.log('finish')
}
test()