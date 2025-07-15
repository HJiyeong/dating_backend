const {generateId} = require('./generateId')
const characterId = {
	hero: '687475d50655ca93c3840443',
	seoyeon: '687475d50655ca93c3840444',
	harin: '687475d50655ca93c3840445',
	jihoo: '687475d50655ca93c3840446',
	jinseop: '687475d50655ca93c3840447',
	nubzuki: '687475d60655ca93c3840448',
}
const chapterId = {
	chapter1: '68747676bdeacc83e59d29b5',
	chapter2: '68747676bdeacc83e59d29b6',
	chapter3: '68747676bdeacc83e59d29b7',
	chapter4: '68747677bdeacc83e59d29b8',
}
const characterImageId = {
	nubzuki_basic:'nubzuki_basic.PNG', // 넙죽이 기본
	jinseop_basic:'', // 진섭 기본
	jihoo_basic:'', // 지후 기본
	seoyeon_basic:'seoyeon_basic.png', // 서연 기본
	seoyeon_side:'seoyeon_side.png', // 서연 옆모습
	seoyeon_detail:'', // 서연 설명화면에서
	seoyeon_angry:'', // 서연 화남/질투
	seoyeon_smile:'', // 서연 활짝 웃기
	seoyeon_light_smile:'seoyeon_lighit_smile.png', // 서연 살짝 웃기
	seoyeon_shame:'', // 서연 설렘
	seoyeon_embarrass:'', // 서연 당황
	seoyeon_home:'', // 서연 메인화면에서
	seoyeon_back:'', // 서연 뒷모습
	harin_basic:'', // 하린 기본
	harin_upset:'', // 하린 삐짐
	harin_detail:'', // 하린 설명화면에서
	harin_side:'', // 하린 옆모습
	harin_angry:'', // 하린 화남
	harin_shame:'', // 하린 설렘
	harin_embarrass:'', // 하린 당황함
	harin_smile:'', // 하린 활짝웃음
	harin_back:'', // 하린 뒷모습
	harin_half_back:'', // 하린 옆과뒷모습 사이
}
const backgroundImageId = {
	blackboard_seoyeon:'blackboard_seoyeon.jpg', //칠판 서연
	blackboard_harin:'', //칠판 하린
	classroom:'classroom.jpg', //몰입실
	classroom_signboard:'classroom_signboard.jpg', //몰입실 간판
	passageway:'', //몰입실 복도
	middle_rounge:'', //몰입실 중간 라운지
	entrace:'', // 몰입실 입구
	entrance_rounge1:'', // 몰입실 입구라운지1
	entrance_rounge2:'', // 몰입실 입구라운지2
	chicken:'', // 훌랄라
	goose:'', // 거위
	e3_building:'', // e3 건물 배경
	ki_building:'', // ki 건물 배경
	river1:'', // 분수 배경
	river2:'', // 호수 배경
	street:'', // 산책로
	sungsimdang:'', // 성심당 내부
	movie:'', // 영화관내부
	night_light1:'', // 야간 가로등 1
	night_light2:'', // 야간 가로등 2
	city:'', // 시내
	cafeteria:'cafeteria.jpg', //학식당
	cafe:'', // 카페
}
const backgroundSoundId = {
	basic:'background_basic1.mp3', //일상1, 몰입실
	basic2:'background_basic2.mp3', //일상2, 식당, 카페
	basic3:'background_basic3.mp3', //일상3, 잔잔한
	serious1:'serious1.mp3', // 긴장
	serious2:'serious2.mp3', // 긴장
	serious3:'serious3.mp3', // 긴장
	loud:'' // 시끌벅적
}
const effectSoundId = {
	keyboard:'keyboard', // 키보드 타건
	camera:'', // 찰칵
	car:'', // 차 끼이이익
	heart_beat:'', // 심장 두근대는
	wind:'' // 바람소리
}
const eventInit = {
	index: '',
	script:'',
	character_id:'',
	where:'',
	when:'',
	character_image_id:'',
	second_character_image_id:'',
	background_image_id:'',
	background_sound_id:'',
	type:'',
	character_action_image_id:'',
	is_re_image:false,
	not_character:false,
	options:[
		{
			id: generateId(),
			text:'',
			score_list:[
				{id: generateId(), character_id:'', score:0}
			]
		}
	],
}
const chapter1Event1Scenario = [
	{
		script:'칠판에 적혀 있는 조별 좌석대로 착석해 주세요. 각 조는 서로 인사 나누고, 오늘부터 본격적으로 프로젝트 진행합니다.',
		character_id:characterId.nubzuki,
		where:'몰입실',
		when:'목요일 오후 2시',
		character_image_id:characterImageId.nubzuki_basic,
		background_image_id:backgroundImageId.classroom_signboard,
		background_sound_id:backgroundSoundId.basic,
		type:'text',
	},
	{
		script:'칠판을 바라본다. 낯선 이름들. 그 중, 눈에 띄는 한 이름.',
		not_character:true,
		background_image_id:backgroundImageId.blackboard_seoyeon,
		type:'narration',
	},
	{
		script:'(서연...? 이름은 익숙한데, 낯이 전혀 없네.)',
		background_image_id:backgroundImageId.blackboard_seoyeon,
		type:'think',
	},
	{
		script:'내 자리를 향해 걸어가다가, 앞자리에서 조용히 짐을 정리하고 있는 여자와 눈이 마주친다.',
		background_image_id:backgroundImageId.classroom,
		character_image_id: characterImageId.seoyeon_side,
		type:'narration',
	},
	{
		script:'차가운 눈동자. 마치 관심조차 없다는 듯한 시선.',
		background_sound_id:backgroundSoundId.serious1,
		type:'narration',
	},
	{
		script:'(이 사람이… 서연인가?)',
		type:'think',
	},
	{
		script:'인사할까, 말까. 머뭇거리다 결국 입을 뗀다.',
		type:'narration',
	},
	{
		script:'아, 안... 안녕하세요.',
		character_id:characterId.hero,
		type:'text',
	},
	{
		script:'서연은 대답 없이 노트북을 열고 조용히 키보드를 두드리기 시작한다.',
		effect_sound_id:effectSoundId.keyboard,
		type:'narration',
	},
	{
		script:'(무시...당한 건가?)',
		type:'think',
	},
	{
		script:'(다시 말 걸어볼까… 아니면 그냥 앉을까…)',
		type:'think',
		options:[
			{
				id: generateId(),
				text:'"혹시... 서연 씨는 프론트엔드랑 백엔드 어떤 것을 주로 하세요?"',
				score_list:[
					{id: generateId(), character_id:characterId.seoyeon, score:1},
				]
			},
			{
				id: generateId(),
				text:'"안녕하세요.” (조금 더 큰 목소리로)',
				score_list:[
					{id: generateId(), character_id:characterId.seoyeon, score:2},
				]
			},
			{
				id: generateId(),
				text:'"조용하신 스타일이신가 보네요…"',
				score_list:[
					{id: generateId(), character_id:characterId.seoyeon, score:-1},
				]
			},
			{
				id: generateId(),
				text:'아무 말도 하지 않고 자리에 앉는다 ',
				score_list:[
					{id: generateId(), character_id:characterId.seoyeon, score:0},
				]
			},
		],
	},
	{
		script:'그녀는 잠시 나를 바라본 후 다시 말 없이 고개를 돌린다.',
		type:'narration',
		character_action_image_id:characterImageId.seoyeon_basic,
		is_re_image:true
	},
	{
		script:'상황은… 예상대로 어색하다.',
		type:'narration',
	},
	{
		script:'그런데 잠시 후, 분반장이 간단한 과제 설명을 마치고 퇴장하자 서연이 조용히 입을 연다.',
		character_image_id:characterImageId.seoyeon_basic,
		type:'narration',
	},
	{
		script:'백엔드는 제가 할게요. 프론트 쪽 맡으세요.',
		character_id:characterId.seoyeon,
		type:'text',
	},
	{
		script:'(1주차부터 백엔드라니.. 열심히 하시는 스타일이신가보네..)',
		type:'think',
	},
	{
		script:'아, 네. 좋아요!',
		character_id:characterId.hero,
		type:'text',
	},
	{
		script:'이후에도 별다른 말은 없었다.',
		not_character:true,
		type:'narration',
	},
	{
		script:'현재까지 대화는 단 두 줄.',
		type:'narration',
	},
	{
		script:'하지만 묘하게 신경 쓰인다.',
		type:'narration',
	},
]

const chapter1Event1 = {
	chapter_id:chapterId.chapter1,
	next_scene_id:'',
	event:1,
	scenario: chapter1Event1Scenario.map((data, i) => ({...data, id: generateId(), index: i + 1}))
}
const chapter1Event2Scenario = [
	{
	  script: '하루 종일 말 한마디 없이 각자 개발에 집중했다.',
	  where: '몰입실',
	  when: '목요일 오후 8시',
	  background_image_id: backgroundImageId.classroom,
	  background_sound_id: backgroundSoundId.basic,
	  not_character: true,
	  type: 'narration',
	},
	{
	  script: '서연은 말없이 키보드를 두드렸고, 나는 그런 그녀에게 괜히 눈치를 보게 됐다.',
	  character_image_id: characterImageId.seoyeon_side,
	  effect_sound_id: effectSoundId.keyboard,
	  type: 'narration',
	},
	{
	  script: '시간은 어느새 6시. 배가 살짝 고파온다.',
	  type: 'narration',
	},
	{
	  script: '(…슬슬 저녁 먹을 시간인데)',
	  type: 'think',
	},
	{
	  script: '잠시 머뭇거리다가 용기를 내어 말을 건넨다.',
	  type: 'narration',
	},
	{
	  script: '저기, 서연 씨... 혹시 같이 식사하실래요?',
	  character_id: characterId.hero,
	  type: 'text',
	},
	{
	  script: '서연은 고개를 들지도 않고 화면을 본 채 키보드 타건을 멈추지 않는다.',
	  effect_sound_id: effectSoundId.keyboard,
	  type: 'narration',
	},
	{
	  script: '대답은 없다. 단 1초의 망설임도 없이 무반응.',
	  type: 'narration',
	},
	{
	  script: '(…됐어. 괜히 말 걸었다.)',
	  type: 'think',
	},
	{
	  script: '괜히 속이 상한 기분. 허탈하게 자리에서 일어난다.',
	  type: 'narration',
	},
	{
	  script: '혼자 밥을 받아 자리에 앉는다.',
	  where: '학식당',
	  background_image_id: backgroundImageId.cafeteria,
	  background_sound_id: backgroundSoundId.basic2,
	  not_character: true,
	  type: 'narration',
	},
	{
	  script: '식당은 캠프 참가자들로 조금씩 붐비기 시작한다.',
	  type: 'narration',
	},
	{
	  script: '(혼자 먹는 것도 나쁘진 않지만... 괜히 씁쓸하네)',
	  type: 'think',
	},
	{
	  script: '그 순간, 누군가 식판을 들고 조용히 내 맞은편 자리에 앉는다.',
	  character_image_id: characterImageId.seoyeon_basic,
	  type: 'narration',
	},
	{
	  script: '고개를 들자, 서연이 아무 말 없이 앉아 밥을 먹기 시작한다.',
	  type: 'narration',
	},
	{
	  script: '(…뭐야. 아까는 왜 아무 말도 안 하고)',
	  type: 'think',
	},
	{
	  script: '하지만 묘하게… 싫진 않았다.',
	  type: 'narration',
	},
	{
	  script: '둘 사이엔 여전히 말 한 마디 없지만, 그 적막은 이전보다 조금 덜 어색하게 느껴진다.',
	  type: 'narration',
	  options: [
		{
		  id: generateId(),
		  text: '(웃으며)“같이 드실 줄은 몰랐네요.”',
		  score_list: [
			{ id: generateId(), character_id: characterId.seoyeon, score: 2 },
		  ],
		},
		{
		  id: generateId(),
		  text: '“…아까는 바쁘셨어요?”',
		  score_list: [
			{ id: generateId(), character_id: characterId.seoyeon, score: -1 },
		  ],
		},
		{
		  id: generateId(),
		  text: '“…괜히 물어봤나 했는데.” (혼잣말)',
		  score_list: [
			{ id: generateId(), character_id: characterId.seoyeon, score: 0 },
		  ],
		},
		{
		  id: generateId(),
		  text: '아무 말도 하지 않는다.',
		  score_list: [
			{ id: generateId(), character_id: characterId.seoyeon, score: 1 },
		  ],
		},
	  ],
	},
  ]

const chapter1Event2 = {
	chapter_id: chapterId.chapter1,
	next_scene_id: '',
	event: 2,
	scenario: chapter1Event2Scenario.map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter1Event3 = {
	chapter_id: chapterId.chapter1,
	next_scene_id: '',
	event: 3,
	scenario: [
	  {
		script: '각자 맡은 파트를 개발 중이다.',
		where: '몰입실',
		when: '월요일 오후 3시',
		background_image_id: backgroundImageId.classroom,
		background_sound_id: backgroundSoundId.basic,
		character_image_id: characterImageId.seoyeon_side,
		type: 'narration',
	  },
	  {
		script: '서연은 백엔드에서 API를 짜고 있고, 나는 프론트 UI 구성과 페이지 연결을 맡았다.',
		type: 'narration',
	  },
	  {
		script: '드디어 레이아웃을 얼추 완성하고, 조심스럽게 서연에게 말을 건다.',
		type: 'narration',
	  },
	  {
		script: '저기… 이 화면 레이아웃 한 번 봐주실래요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '서연은 고개를 돌려 내 화면을 본다.',
		character_image_id: characterImageId.seoyeon_basic,
		type: 'narration',
	  },
	  {
		script: '말 없이 마우스를 움직이며 천천히 훑는다.',
		type: 'narration',
	  },
	  {
		script: '한참 정적. 나는 모니터가 아닌 그녀의 반응만을 본다.',
		type: 'narration',
	  },
	  {
		script: '(혹시… 마음에 안 드나?)',
		type: 'think',
	  },
	  {
		script: '…버튼 위치 여기 말고 오른쪽 아래. 사용자 시선은 아래로 떨어져요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '아… 그렇구나.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그런 건 생각도 못 했네요. 고마워요. 바로 수정할게요.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '고개를 끄덕인 뒤, 그녀는 다시 자기 자리로 돌아간다.',
		character_image_id: characterImageId.seoyeon_side,
		type: 'narration',
	  },
	  {
		script: '그런데 잠시 후, 내 모니터를 힐끔 본다.',
		type: 'narration',
	  },
	  {
		script: '…패딩값 좀 줄여야 할 것 같아요.',
		character_id: characterId.seoyeon,
		character_image_id: characterImageId.seoyeon_basic,
		type: 'text',
	  },
	  {
		script: '모바일 뷰 깨질 수 있어요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '아, 진짜네… 뭔가 잘 안 맞았는데. 대단하신데요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그녀는 아무 말 없이 다시 자기 화면을 본다.',
		character_image_id: characterImageId.seoyeon_side,
		type: 'narration',
	  },
	  {
		script: '잠시 후, 커밋 메시지를 적으며 말을 꺼낸다.',
		effect_sound_id: effectSoundId.keyboard,
		type: 'narration',
	  },
	  {
		script: '혹시 커밋할 것 있으세요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '아직이요',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '(역시나… 단답.)',
		type: 'think',
	  },
	  {
		script: '하지만 괜히 또 궁금해져서 묻는다.',
		type: 'narration',
	  },
	  {
		script: '혹시 이런 프로젝트 해보신적 있으세요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '아… 네',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '아… 네!',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '이대로 대화가 끝나버릴까 싶어, 가벼운 농담을 던져본다.',
		type: 'narration',
	  },
	  {
		script: '하하, 뭔가 서연 씨랑 얘기하다 보면 면접 보는 느낌이에요.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '서연은 손을 멈춘다. 조용히 고개를 돌린다.',
		character_image_id: characterImageId.seoyeon_side,
		type: 'narration',
	  },
	  {
		script: '그쪽이 말이 많아서 그렇죠.',
		character_id: characterId.seoyeon,
		character_image_id: characterImageId.seoyeon_light_smile,
		type: 'text',
	  },
	  {
		script: '그 말투는 무표정했지만, 그 입꼬리는 아주, 아주 미세하게 올라갔다.',
		type: 'narration',
	  },
	  {
		script: '(…방금, 웃은 거 맞지?)',
		type: 'think',
		options: [
		  {
			id: generateId(),
			text: '“하핫… 제가 말이 좀 많긴 하죠”',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '“제가 그렇게 말이 많았나요?”',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '“…그럼, 조금만 조용히 해볼게요.”',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '아무 말도 하지 않고 웃는다.',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 1 },
			],
		  },
		],
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
module.exports = {chapter1Event1, characterId}