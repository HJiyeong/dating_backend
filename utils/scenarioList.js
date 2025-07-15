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
	hero_basic:'hero_basic.png', // 넙죽이 기본
	nubzuki_basic:'nubzuki_basic.PNG', // 넙죽이 기본
	jinseop_basic:'jinseop_basic.png', // 진섭 기본
	jihoo_basic:'jihoo_basic.png', // 지후 기본
	seoyeon_basic:'seoyeon_basic.png', // 서연 기본
	seoyeon_side:'seoyeon_side.png', // 서연 옆모습
	seoyeon_detail:'seoyeon_detail.png', // 서연 설명화면에서
	seoyeon_angry:'seoyeon_angry.png', // 서연 화남/질투
	seoyeon_smile:'seoyeon_smile.png', // 서연 활짝 웃기
	seoyeon_light_smile:'seoyeon_lighit_smile.png', // 서연 살짝 웃기
	seoyeon_shame:'seoyeon_shame.png', // 서연 설렘
	seoyeon_embarrass:'seoyeon_embrrass.png', // 서연 당황
	seoyeon_home:'seoyeon_home.png', // 서연 메인화면에서
	seoyeon_back:'seoyeon_back.png', // 서연 뒷모습
	harin_basic:'harin_basic.png', // 하린 기본
	harin_upset:'harin_upset.png', // 하린 삐짐
	harin_detail:'harin_detail.png', // 하린 설명화면에서
	harin_side:'harin_side.png', // 하린 옆모습
	harin_angry:'harin_angry.png', // 하린 화남
	harin_shame:'harin_shame.png', // 하린 설렘
	harin_embarrass:'harin_embarrass.png', // 하린 당황함
	harin_smile:'harin_smile.png', // 하린 활짝웃음
	harin_back:'harin_back.png', // 하린 뒷모습
	harin_half_back:'harin_half_back.png', // 하린 옆과뒷모습 사이
}
const backgroundImageId = {
	blackboard_seoyeon:'blackboard_seoyeon.jpg', //칠판 서연
	blackboard_harin:'blackboard_harin.jpg', //칠판 하린
	kakao_talk:'',
	classroom:'classroom.jpg', //몰입실
	classroom_signboard:'classroom_signboard.jpg', //몰입실 간판
	passageway:'passageway.jpg', //몰입실 복도
	middle_rounge:'middle_rounge.jpg', //몰입실 중간 라운지
	entrace:'entrace.jpg', // 몰입실 입구
	entrance_rounge1:'entrance_rounge1.jpg', // 몰입실 입구라운지1
	entrance_rounge2:'entrance_rounge2.jpg', // 몰입실 입구라운지2
	chicken:'chicken.jpg', // 훌랄라
	goose:'goose.jpg', // 거위
	e3_building:'e3_building.jpg', // e3 건물 배경
	ki_building:'ki_building.jpg', // ki 건물 배경
	river1:'river1.jpg', // 분수 배경
	river2:'river2.jpg', // 호수 배경
	street:'street.jpg', // 산책로
	sungsimdang:'sungsimdang.jpg', // 성심당 내부
	movie:'movie.jpg', // 영화관내부
	night_light1:'night_light1.jpg', // 야간 가로등 1
	night_light2:'night_light2.jpg', // 야간 가로등 2
	city:'city.jpg', // 시내
	cafeteria:'cafeteria.jpg', //학식당
	cafe:'cafe.jpg', // 카페
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
	kakao_talk:'',
	bicycle:'', // 끼이이익
	foot_walk:'',
	heart_beat:'', // 심장 두근대는
	wind:'', // 바람소리
	water:'',
	cheers:'',
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
	effect_sound_id:'',
	background_sound_id:'',
	type:'',
	character_action_image_id:'',
	character_re_image_id:false,
	not_character:false,
	not_character_second:false,
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
		script:'내 자리를 향해 걸어가다가, 앞자리에서 조용히 짐을 정리하고 있는 여자를 발견한다.',
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
		character_re_image_id:characterImageId.seoyeon_side
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
	next_scene_id:'68765002749b08c2ac1bbc8f',
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
	next_scene_id: '68765019483e510fa0d9424c',
	event: 2,
	scenario: chapter1Event2Scenario.map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter1Event3 = {
	chapter_id: chapterId.chapter1,
	next_scene_id: '6876502a92b18dbc4c996e04',
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
  const chapter1Event4 = {
	chapter_id: chapterId.chapter1,
	next_scene_id: '6876503bd57223e6ef3f0a09',
	event: 4,
	scenario: [
	  {
		script: '일주일간 쌓인 피로를 씻듯, 떠드는 소리와 잔 부딪히는 소리가 가득한 회식 자리.',
		where: '훌랄라',
		when: '수요일 오후 9시',
		background_image_id: backgroundImageId.chicken,
		background_sound_id: backgroundSoundId.loud,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '아직 서로 어색하여 팀원들끼리 앉아있다. 나와 서연은 나란히 벽 쪽 자리에 앉았다.',
		type: 'narration',
	  },
	  {
		script: '서연은 말없이 소주잔을 비운다. 마시는 속도는 빠르지도 느리지도 않지만, 이미 두 잔째.',
		type: 'narration',
	  },
	  {
		script: '오~ 서연 씨 술 마시는 타입이셨어요?',
		character_id: characterId.jinseop,
		character_image_id: characterImageId.jinseop_basic,
		type: 'text',
	  },
	  {
		script: '완전 차가운 도시여자인 줄 알았는데~?',
		character_id: characterId.jinseop,
		type: 'text',
	  },
	  {
		script: '서연은 진섭을 바라보지도 않은 채 말없이 소주잔을 내려놓는다.',
		character_image_id: characterImageId.seoyeon_basic,
		type: 'narration',
	  },
	  {
		script: '그쪽이 시끄러워서… 마시면 잘 안 들릴까 해서요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: 'ㅋㅋㅋ 어우~ 저한테 농담도 하시네. 이제 저 좀 친해졌나~?',
		character_id: characterId.jinseop,
		type: 'text',
	  },
	  {
		script: '내가 말없이 고기만 뒤집고 있을 때, 서연이 소주잔을 내 쪽으로 슬쩍 건넨다.',
		character_image_id: characterImageId.seoyeon_shame,
		type: 'narration',
	  },
	  {
		script: '…따라줘요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '어? 아, 네네!',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '병을 들어 조심스레 잔을 채운다.',
		effect_sound_id: effectSoundId.water,
		type: 'narration',
	  },
	  {
		script: '발표가 무사히 끝나서 다행이네요. 서연씨는 어떠셨어요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그녀는 말 없이 술 잔을 들어서 건배하려는 포즈를 취한다.',
		type: 'narration',
	  },
	  {
		script: '잔을 부딪히며 그녀의 손과 나의 손이 간지럽게 스친다.',
		effect_sound_id: effectSoundId.cheers,
		type: 'narration',
	  },
	  {
		script: '나는 술잔을 들고 마시며, 괜히 얼굴이 화끈거린다.',
		type: 'narration',
	  },
	  {
		script: '…사실 협업 같은 거, 진짜 싫어요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '맞춰주는 것도 피곤하고, 말 돌리는 것도 싫고…',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '그녀의 목소리는 이전보다 훨씬 낮고 조용했다.',
		type: 'narration',
	  },
	  {
		script: '근데… 이번 주는 생각보다 안 불편했어요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '그 순간, 진섭이 소리를 지르며 잔을 든다.',
		type: 'narration',
	  },
	  {
		script: '자! 다들 짠 한 번 더~!',
		character_id: characterId.jinseop,
		character_image_id: characterImageId.jinseop_basic,
		type: 'text',
	  },
	  {
		script: '아니 이 조는 왜 이렇게 조용해요~ 둘이 데이트하는 줄!',
		character_id: characterId.jinseop,
		type: 'text',
	  },
	  {
		script: '서연은 조용히 고개를 돌린다. 그리고 나지막하게 말한다.',
		character_image_id: characterImageId.seoyeon_shame,
		type: 'narration',
	  },
	  {
		script: '…신경 쓰지 마요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '(…심장이 뛴다)',
		effect_sound_id: effectSoundId.heart_beat,
		type: 'think',
	  },
	  {
		script: '(이건… 그저 술기운 탓일까?)',
		type: 'think',
		options: [
		  {
			id: generateId(),
			text: '(단둘이 있고 싶다…) 여기 너무 시끄럽죠? 저희 나가서…',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '…서연 씨, 지금 약간 취하신 거 같아요.',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '(장난스러운 표정으로) 그쪽을요?~',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '아무 말 없이 술을 따른다.',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 1 },
			],
		  },
		],
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter1Event5 = {
	chapter_id: chapterId.chapter1,
	next_scene_id: '',
	event: 5,
	scenario: [
	  {
		script: '일주일간 고군분투한 프로젝트. 결과는 예상보다 훨씬 더 좋았다.',
		where: '몰입실 복도',
		when: '목요일 6시',
		background_image_id: backgroundImageId.passageway,
		background_sound_id: backgroundSoundId.basic,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '우리는 수요일날 금픽으로 선정되어서 발표를 하였다.',
		type: 'narration',
	  },
	  {
		script: '아까 발표 잘 들었습니다. 기능 설명도 명확했고, 두 분의 조합이 특히 인상적이었어요.',
		character_id: characterId.nubzuki,
		character_image_id: characterImageId.nubzuki_basic,
		type: 'text',
	  },
	  {
		script: '나는 왠지 부끄러워서 헛웃음이 나오고, 옆에 서 있는 서연을 힐끔 바라본다.',
		character_image_id: characterImageId.seoyeon_basic,
		type: 'narration',
	  },
	  {
		script: '서연은 별다른 표정 없이 고개를 살짝 끄덕인다.',
		type: 'narration',
	  },
	  {
		script: '(…여전히 무표정하네.)',
		type: 'think',
	  },
	  {
		script: '(어제의 그 분위기는… 그냥 술기운이었던 걸까.)',
		type: 'think',
	  },
	  {
		script: '망설이다가, 작게 말을 건넨다.',
		type: 'narration',
	  },
	  {
		script: '저기… 어제는 꽤 드셨던데, 기억… 나요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '서연은 조용히 나를 본다.',
		type: 'narration',
	  },
	  {
		script: '잠깐의 정적 후',
		type: 'narration',
	  },
	  {
		script: '(고개를 끄덕이며) 네. 기억나요.',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '그럼… 그 말도요?',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '‘이번 주는 생각보다 안 불편했다’던 그거.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '서연은 조용히 시선을 피했다가 다시 나를 바라본다.',
		character_action_image_id: characterImageId.seoyeon_side,
		character_re_image_id: characterImageId.seoyeon_embarrass,
		type: 'narration',
	  },
	  {
		script: '그리고 낮은 목소리로 말한다.',
		type: 'narration',
	  },
	  {
		script: '그건, 그냥….',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '그녀의 목소리는 여전히 담담했지만, 그 말 뒤에 따라붙는 침묵엔 분명 무언가가 묻어 있었다.',
		type: 'narration',
	  },
	  {
		script: '나는 괜히 눈을 피하며 머리를 긁적인다.',
		type: 'narration',
	  },
	  {
		script: '잠시 뒤, 각자의 자리에 돌아가려는 찰나. 서연이 내게 조용히 말을 건넨다.',
		type: 'narration',
	  },
	  {
		script: '수고했어요. 이번 주.',
		character_image_id: characterImageId.seoyeon_smile,
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '(나는 뭐라고 할까..)',
		type: 'think',
		options: [
		  {
			id: generateId(),
			text: '서연씨도 수고했어요',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '저는 한 것 없어요. 서연씨가 수고했죠',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '서연씨랑 같이 해서 좋았어요',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: 1 },
			],
		  },
		  {
			id: generateId(),
			text: '아무 말도 하지 않는다',
			score_list: [
			  { id: generateId(), character_id: characterId.seoyeon, score: -1 },
			],
		  },
		],
	  },
	  {
		script: '그녀는 말 없이 돌아서지만, 그 짧은 인사 한마디가 이상하게 오래 남는다.',
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '(…지금은, 아직 잘 모르겠지만.)',
		type: 'think',
	  },
	  {
		script: '(그래도 확실한 건—)',
		type: 'think',
	  },
	  {
		script: '(처음보단 조금, 가까워졌다는 거.)',
		type: 'think',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
}
const chapter2Event1 = {
	chapter_id: chapterId.chapter2,
	next_scene_id: '',
	event: 1,
	scenario: [
	  {
		script: '목요일 오후 2시, 다시 시작된 캠프. 조편성 공지가 뜨고, 몰입실 안은 다시 조용한 긴장감으로 가득하다.',
		where: '몰입실',
		when: '목요일 오후 2시',
		background_image_id: backgroundImageId.classroom_signboard,
		background_sound_id: backgroundSoundId.basic,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '내 이름 옆에 쓰여 있는 낯선 이름 하나—‘하린’이라는 이름이 눈에 들어온다.',
		background_image_id: backgroundImageId.blackboard_harin,
		type: 'narration',
	  },
	  {
		script: '(…이번 주는 누구지? 지난주엔 서연 씨였는데.)',
		type: 'think',
	  },
	  {
		script: '자리를 찾아 가던 중, 옆자리에서 누군가 반짝 손을 흔든다.',
		type: 'narration',
	  },
	  {
		script: '어, 혹시 ○○씨 맞죠?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		background_image_id: backgroundImageId.classroom,
		type: 'text',
	  },
	  {
		script: '이번 주 우리 팀인가 보다! 반가워요~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '쾌활한 목소리. 다짜고짜 밝게 웃으며 말을 건다.',
		type: 'narration',
	  },
	  {
		script: '저 하린이에요! 잘 부탁해요~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '아, 네. 저도 잘 부탁드려요.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '앗, 말 편하게 해도 되죠?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '회식때 같은 03년생이라고 들었어요!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '이미 몇 마디 안 했는데, 거리감이 없다.',
		type: 'narration',
	  },
	  {
		script: '그녀는 어느새 옆으로 의자를 끌어와 앉는다.',
		type: 'narration',
	  },
	  {
		script: '”아, 네. 편하게 해요”',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '(회식 때?…확실히 그랬던거 같기도…)',
		type: 'think',
	  },
	  {
		script: '그래 좋아!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '1주차때 내 룸메랑 같이 했지??',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '서연이랑 나랑 룸메이트거든~~>3<',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '”아~ 서연씨랑 룸메이트시구나”',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '서연이 어땠어?',
		character_id: characterId.harin,
		type: 'text',
		options: [
		  {
			id: generateId(),
			text: '“아, 서연씨 백엔드 잘 하시더라고요.”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 1 },
			],
		  },
		  {
			id: generateId(),
			text: '“음… 무뚝뚝한 분이었어요. 같이 일할 땐 괜찮았지만요.”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '“잘 모르겠어요”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '“어…괜찮았던 것 같아요. 서연씨 덕분에 제가 많이 배웠거든요.”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 2 },
			],
		  },
		],
	  },
	  {
		script: '아니~~~ 말 놓으라니까아~',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_upset,
		type: 'text',
	  },
	  {
		script: '아..알겠어…',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그럼 지난주에 코딩만 했겠네.. 재미없었겠당',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '”거의..뭐….”',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그녀의 높은 텐션이 전혀 감당이 안된다',
		type: 'narration',
	  },
	  {
		script: '저번주와는 완전히 상반된 분위기',
		type: 'narration',
	  },
	  {
		script: '난 반대로 말 진짜 많은데~ 헤헤~~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '혹시 시끄럽다고 싫어하는거 아니지~?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '음…(싫진 않은데..그렇다고 뭐라고 말을 해야 하는거지?...)',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '이잉… 진짜 싫은거야? 대답이 없네..ㅜㅜ',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_upset,
		type: 'text',
	  },
	  {
		script: '아…아니야!',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '다행이다~!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '나 사실.. 대전은 처음이라.. 여기 예쁜 카페 많다고 들었어!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '어.. 예쁜 카페 많지…(사실 가본적은 한번도 없지만…)',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '“그럼 우리 예쁜 카페가서 하자!”',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(이거 설마… 데이트?)',
		type: 'think',
	  },
	  {
		script: '그녀는 빠르게 일어나 가방을 챙기고, 나가기 전 거울을 보면서 머리를 만진다.',
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '그 모습을 보느라 나는 제 때 가방을 챙기지 못해 덤벙댄다.',
		type: 'narration',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter2Event2 = {
	chapter_id: chapterId.chapter2,
	next_scene_id: '',
	event: 2,
	scenario: [
	  {
		script: '목요일 오후 4시, 하린과 함께 캠퍼스 근처 카페로 향한다.',
		where: '파스구찌',
		when: '목요일 오후 4시',
		background_image_id: backgroundImageId.cafe,
		background_sound_id: backgroundSoundId.basic2,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '창가 자리에 앉아 각자 노트북을 꺼낸다.',
		type: 'narration',
	  },
	  {
		script: '와, 여기 분위기 괜찮다~',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '오늘부터 카페만 가야겠다 헤헤.',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(나도... 같이?)',
		type: 'think',
	  },
	  {
		script: '하린이 메뉴판을 보며 커피와 먹을 디저트를 고민한다.',
		character_image_id: characterImageId.harin_back,
		type: 'narration',
	  },
	  {
		script: '아ㅏㅏㅏㅏ 바스크 치즈 케이크 먹을까 ㅏㅏㅏㅏㅏ\n아니면 프레첼 버터 솔트 베이글을 먹을까ㅏㅏㅏㅏ...\n진짜 못 고르겠어ㅜㅜ',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '…(무슨 얘기를 하는거지? 새로 나온 라이브러리인가?)',
		type: 'think',
	  },
	  {
		script: '아 나 진짜 선택장애 있단 말이야~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '너가 골라줘!',
		character_id: characterId.harin,
		type: 'text',
		options: [
		  {
			id: generateId(),
			text: '“…바스켓 머시기?”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '“아….나도…이런…거…잘…못고르는데….”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '“빨리 골라야 될 것 같아, 뒷 사람이 기다리고 있어…”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '“미안.. 나 디저트는 잘 몰라서…”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 1 },
			],
		  },
		],
	  },
	  {
		script: '아 저녁도 먹어야되는데… 그냥 안 먹어야겠다~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '살쪄 살쪄',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '그럼..왜…',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '메뉴를 받고 자리에 앉는다.',
		type: 'narration',
	  },
	  {
		script: '10분 정도 서로 말없이 노트북을 두드린다.',
		effect_sound_id: effectSoundId.keyboard,
		type: 'narration',
	  },
	  {
		script: '아.. 먼가 오늘은 코딩할 기분이 아닌 것 같아',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '대전에 맛집 많지 않아?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '대전에 맛집 많지\n(한 번도 가 본 적은 없지만)',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그녀는 웃으며, 노트북 너머로 내 눈을 바라본다.',
		character_image_id: characterImageId.harin_smile,
		type: 'narration',
	  },
	  {
		script: '(확실히…얼굴은 귀엽지만…)',
		type: 'think',
	  },
	  {
		script: '(살짝 버겁네....)',
		type: 'think',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter2Event3 = {
	chapter_id: chapterId.chapter2,
	next_scene_id: '',
	event: 3,
	scenario: [
	  {
		script: '금요일 오후 6시, 서버 작업을 마친 후, 하린과 함께 밥 먹으러 가는길.',
		where: '라운지',
		when: '금요일 오후 6시',
		background_image_id: backgroundImageId.entrance_rounge1,
		background_sound_id: backgroundSoundId.basic,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '라운지 앞을 지나던 중—익숙한 얼굴이 눈에 들어온다.',
		type: 'narration',
	  },
	  {
		script: '소파 맞은편. 조용히 노트북을 펼친 서연, 그 앞에 앉은 건… 지후.',
		character_image_id: characterImageId.seoyeon_basic,
		second_character_image_id: characterImageId.jihoo_basic,
		background_sound_id: backgroundSoundId.serious,
		type: 'narration',
	  },
	  {
		script: '지후가 무언가를 설명하고, 서연이가 웃음을 짓는다.',
		character_image_id: characterImageId.seoyeon_smile,
		type: 'narration',
	  },
	  {
		script: '(…서연씨가 저런 표정도 지을 줄 알았나?)',
		type: 'think',
	  },
	  {
		script: '발걸음이 잠깐 멈춘다.',
		type: 'narration',
	  },
	  {
		script: '응? 왜 멈췄어?',
		character_image_id: characterImageId.harin_basic,
		not_character_second: true,
		type: 'text',
		character_id: characterId.harin,
	  },
	  {
		script: '(하린이 옆에서 고개를 돌린다.)',
		type: 'narration',
	  },
	  {
		script: '어 서연이다!',
		second_character_image_id: characterImageId.seoyeon_basic,
		type: 'text',
		character_id: characterId.harin,
	  },
	  {
		script: '서연아 안녕! 옆에는 누구야?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '어, 안녕',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '옆에는..',
		character_id: characterId.seoyeon,
		type: 'text',
	  },
	  {
		script: '(말을 끊으며) 아 하린씨 안녕하세요',
		character_id: characterId.jihoo,
		character_image_id: characterImageId.jihoo_basic,
		type: 'text',
	  },
	  {
		script: '우리 서연이랑 룸메이트 하시는 분이죠? 옆에는… 누구?',
		character_id: characterId.jihoo,
		type: 'text',
	  },
	  {
		script: '(…바로 책상 옆자린데 일부로 모른척하는건가?) 저는 OO이라..',
		type: 'think',
	  },
	  {
		script: '(말을 또 끊으며) 아~ 우리 옆자리에 앉은 조용하신분?~',
		character_id: characterId.jihoo,
		type: 'text',
	  },
	  {
		script: '만나서 반가워요~',
		character_id: characterId.jihoo,
		type: 'text',
	  },
	  {
		script: '(조용하신 분?..)아, 네. 저도 반가워요',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '배고프니까 빨리 가자아~',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		not_character_second: true,
		type: 'text',
	  },
	  {
		script: '하린이 주인공 팔을 잡고 끌고 간다',
		type: 'narration',
	  },
	  {
		script: '5보 정도 걸은 후…',
		type: 'narration',
	  },
	  {
		script: '아~ 저번주 팀메이트라고?',
		character_id: characterId.jihoo,
		character_image_id: characterImageId.jihoo_basic,
		type: 'text',
	  },
	  {
		script: 'ㅋㅋ 힘들었겠네',
		character_id: characterId.jihoo,
		type: 'text',
	  },
	  {
		script: '(들리는데..)',
		type: 'think',
	  },
	  {
		script: '저 사람 진짜 이상하다. 그치?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_angry,
		background_image_id: backgroundImageId.entrance_rounge2,
		type: 'text',
	  },
	  {
		script: '그러게…',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '근데 먼가 서연이랑 잘 어울리는 것 같기도 하고…',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '너는 어떻게 생각해?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
		options: [
		  {
			id: generateId(),
			text: '“잘 어울리는 것 같네”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '“나는 잘 모르겠는데?”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '“서연씨는 그런 사람 안 좋아해”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '“뭐 알아서 잘하겠지…”',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 1 },
			],
		  },
		],
	  },
	  {
		script: '음~ 그렇구나~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '가볍게 웃으며 다시 걸음을 옮기려는 하린.',
		type: 'narration',
	  },
	  {
		script: '그런데 그녀의 웃음 뒤로, 이상하게 마음 한구석이 찜찜하다.',
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '왜 그런지는 모르겠지만…',
		type: 'narration',
	  },
	  {
		script: '서연이가 그 녀석 앞에서 웃던 모습이 머릿속을 떠나가지 않는다.',
		type: 'narration',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter2Event4 = {
	chapter_id: chapterId.chapter2,
	next_scene_id: '',
	event: 4,
	scenario: [
	  {
		script: '우리 오늘은 놀러 가자!',
		where: '기숙사',
		when: '일요일 오전 10시',
		background_image_id: backgroundImageId.kakao_talk, // 카카오톡 UI 대체 불가 시 적당한 배경 사용
		background_sound_id: backgroundSoundId.basic,
		character_id: characterId.harin,
		not_character: true,
		type: 'text',
	  },
	  {
		script: '갑자기?',
		character_id: characterId.hero,
		effect_sound_id: effectSoundId.kakao_talk, // 카톡 사운드 대체 사용
		type: 'text',
	  },
	  {
		script: '나 성심당 가보고 싶단 말이야~',
		character_id: characterId.harin,
		effect_sound_id: effectSoundId.kakao_talk,
		type: 'text',
	  },
	  {
		script: '우리 어제까지 열심히 코딩했으니까 하루는 쉬어도 돼!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '그래',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '오후 2시, 성심당 앞.',
		where: '성심당',
		when: '일요일 오후 2시',
		background_image_id: backgroundImageId.city,
		background_sound_id: backgroundSoundId.basic2,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '빵 냄새가 골목 전체를 감싸고, 줄은 생각보다 길다.',
		type: 'narration',
	  },
	  {
		script: '하린은 한 손에 핸드폰, 다른 손엔 내 팔목 끝단을 잡고 있다.',
		character_image_id: characterImageId.harin_basic,
		type: 'narration',
	  },
	  {
		script: '온몸의 신경이 팔목으로 집중된다',
		type: 'narration',
	  },
	  {
		script: '여기야! 여기가 그 유명한 튀김소보로 본점이야!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(…이걸 이렇게까지 기다려서 먹는다고?)',
		type: 'think',
	  },
	  {
		script: '사람 진짜 많네…',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '에이~ 원래 이런 곳은 기다리는 맛도 포함이라구요~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '아 기다리는 동안 우리 셀카 찍자!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '갑자기 가까이 다가온다.',
		character_image_id: characterImageId.harin_smile,
		type: 'narration',
	  },
	  {
		script: '하나, 둘—',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(찰칵.)',
		effect_sound_id: effectSoundId.camera,
		type: 'narration',
	  },
	  {
		script: '흐흐~ 이거 너한테도 보내줄게!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '아, 응… 고마워.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '내가 오늘 하루 계획을 짜봤거든?~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '성심당 → 은행동 떡볶이 → 카페 코스!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '어때, 데이트 플래너 하린쌤!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_smile,
		type: 'text',
	  },
	  {
		script: '하린이 장난스럽게 손을 번쩍 든다.',
		type: 'narration',
	  },
	  {
		script: '…데이트라는 단어가 자꾸 신경 쓰인다.',
		type: 'narration',
	  },
	  {
		script: '성심당 내부. 드디어 튀김소보로, 망고 롤, 명란바게트를 골라 계산대에 올려둔다.',
		where: '성심당 내부',
		when: '일요일 오후 3시',
		background_image_id: backgroundImageId.sungsimdang,
		type: 'narration',
	  },
	  {
		script: '지갑에서 카드를 꺼낸다',
		type: 'narration',
	  },
	  {
		script: '사주는거야?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '응..(21,200원… 내일은 학식 먹어야겠네…)',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '고마워! 내가 다음에 맛있는거 살게! ㅎㅎ',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(다음..? 언제?…)',
		type: 'think',
	  },
	  {
		script: '근처 공원 벤치에 앉아 빵을 나눠먹는 중',
		background_image_id: backgroundImageId.goose,
		type: 'narration',
	  },
	  {
		script: '이거 진짜 맛있다… 튀김인데 안 느끼해!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_smile,
		type: 'text',
	  },
	  {
		script: '입에 빵 부스러기를 살짝 묻힌 채 웃는다.',
		type: 'narration',
	  },
	  {
		script: '하린은…',
		type: 'narration',
	  },
	  {
		script: '뭘 먹을 때가 제일 행복해 보인다.',
		type: 'narration',
	  },
	  {
		script: '너, 지난주엔 이런 데 안 다녀봤지?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '…응. 거의 기숙사-몰입실 루트만 다녔어.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그럴 줄 알았어!',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '나 아니었으면 이 맛도 못 보고 끝날 뻔했잖아~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '확실히 맛있긴 하네..',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '빵을 다 먹고, 산책길을 천천히 걷는다.',
		background_image_id: backgroundImageId.street,
		type: 'narration',
	  },
	  {
		script: '그때 자전거가 빠르게 뒤에서 다가온다',
		background_sound_id: backgroundSoundId.serious3,
		effect_sound_id: effectSoundId.bicycle, // 자전거 소리 대체 가능
		type: 'narration',
	  },
	  {
		script: '나는 얼떨결에 그녀의 어깨를 감싸 길 안쪽으로 끌어온다',
		type: 'narration',
	  },
	  {
		script: '하린은 잠시 놀란듯 멈춰서서 나를 바라본다.',
		type: 'narration',
	  },
	  {
		script: '(혼잣말로)“자연스럽네…”',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_embarrass,
		type: 'text',
	  },
	  {
		script: '근데 너는…',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '원래 이렇게 아무한테나 스윗해?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '…심장 소리가 갑자기 크게 들린다',
		effect_sound_id: effectSoundId.heart_beat,
		type: 'narration',
	  },
	  {
		script: '내 얼굴을 볼 수는 없지만, 아마 새빨간 토마토일 것이다.',
		type: 'narration',
		options: [
		  {
			id: generateId(),
			text: '"그냥 너 다칠까봐…" ',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '"(사고가 제대로 안돌아간다…) 내가 좀 스윗남이야 (안돼..말이 헛나왔다)"',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 1 },
			],
		  },
		  {
			id: generateId(),
			text: '"미안해…" ',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: -1 },
			],
		  },
		  {
			id: generateId(),
			text: '"아니…절대…." ',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 0 },
			],
		  },
		],
	  },
	  {
		script: '헤~ 뭐야~',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '좀 귀엽다 너.',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '갑자기 내 옷깃을 툭 잡아당긴다.',
		type: 'narration',
	  },
	  {
		script: '근데 아무한테나 그러면 안되는거 알지?~',
		character_id: characterId.harin,
		background_sound_id: backgroundSoundId.basic2,
		type: 'text',
	  },
	  {
		script: '그리고는 다시 앞장서서 걷는다. 빛이 드는 방향을 향해서.',
		character_image_id: characterImageId.harin_back,
		type: 'narration',
	  },
	  {
		script: '…이런 하루도, 나쁘지 않다.',
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '언제부턴가, 그녀의 뒷모습이 익숙하게 느껴진다.',
		type: 'narration',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  const chapter2Event5 = {
	chapter_id: chapterId.chapter2,
	next_scene_id: '',
	event: 5,
	scenario: [
	  {
		script: '밤공기가 살짝 선선한 화요일 저녁.',
		where: '캠퍼스 가로등 밑',
		when: '화요일 11시',
		background_image_id: backgroundImageId.night_light1,
		background_sound_id: backgroundSoundId.basic3,
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '하린과 함께 조용히 캠퍼스 길을 걷는다.',
		type: 'narration',
	  },
	  {
		script: '낮보다 훨씬 조용한 분위기. 가로등 불빛 아래, 발소리만 가볍게 이어진다.',
		effect_sound_id: effectSoundId.foot_walk,
		type: 'narration',
	  },
	  {
		script: '우리 오늘 되게 열일 했다 그지~',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '(사실 거의 내가 했지만…)"응 그치”',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '에이 또 무슨 그치야~ 너가 다 했으면서 큭큭',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '”아니야 너가 잘했지..”',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그니깐.~ 우리 막 금픽 되는 거 아니야?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '그럼 발표는 어떡해ㅜㅜ',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(설마 그럴리가..) 그건 그때 생각하지 뭐..',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '(하린은 무언가를 말하려다 다시 고개를 돌렸다.)',
		character_image_id: characterImageId.harin_back,
		type: 'narration',
	  },
	  {
		script: '그렇게 5분정도 그냥 걷기만 했다..',
		type: 'narration',
	  },
	  {
		script: '(왜 말이 없지…? 오늘 안 좋은 일 있나?)',
		background_image_id: backgroundImageId.night_light2,
		type: 'think',
	  },
	  {
		script: '오늘은 좀 말이 없네..',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '그녀는 잠시 걷던 발걸음을 멈춘다.',
		type: 'narration',
	  },
	  {
		script: '하늘을 바라보며, 잠깐 생각에 잠긴 듯한 표정.',
		type: 'narration',
	  },
	  {
		script: '…사실 말인데.',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		background_sound_id: backgroundSoundId.nervous,
		type: 'text',
	  },
	  {
		script: '잠시 뜸을 들인다.',
		type: 'narration',
	  },
	  {
		script: '(이거 혹시…. 고백하려나?)',
		type: 'think',
	  },
	  {
		script: '(아…어떡하지… )',
		type: 'think',
	  },
	  {
		script: '(…)',
		type: 'think',
	  },
	  {
		script: '(아기 이름은 역시…)',
		type: 'think',
	  },
	  {
		script: '사실 나, 이 캠프 오기 전에 코딩 경험은 별로 없어서. 걱정 많이했거든..',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '(…아니었네)',
		type: 'think',
	  },
	  {
		script: '근데 너가 잘 알려줘서, 고마웠어!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_embarrass,
		type: 'text',
	  },
	  {
		script: '그 말 끝에 그녀는 수줍게 웃는다.',
		type: 'narration',
	  },
	  {
		script: '음…(부끄러워서 말을 할 수가 없다)',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '나 있지~ 다음에 또 너랑 하고 싶다!',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_smile,
		type: 'text',
	  },
	  {
		script: '그녀는 나를 올려다보며 해맑게 웃는다.',
		type: 'narration',
	  },
	  {
		script: '어딘가 내 반응을 기대하는 눈치이다',
		type: 'narration',
	  },
	  {
		script: '(거의 들리지 않게 기어가는 목소리로)어..나도…',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '응? 뭐라고? 잘 안들렸어.',
		character_id: characterId.harin,
		options: [
		  {
			id: generateId(),
			text: '"나도 너랑 다시 하고 싶다고"',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 2 },
			],
		  },
		  {
			id: generateId(),
			text: '"아.. 아니야."',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 0 },
			],
		  },
		  {
			id: generateId(),
			text: '"(여전히 거의 들리지 않지만 조금은 커진 목소리로)어..나도…" ',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: 1 },
			],
		  },
		  {
			id: generateId(),
			text: '"안 들린 척 하지마"',
			score_list: [
			  { id: generateId(), character_id: characterId.harin, score: -1 },
			],
		  },
		],
	  },
	  {
		script: '흐음~',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '그치만 짧아도 괜찮은 거 같아.',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '좋은 기억은 길이보다 깊이가 더 중요하잖아.',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '가로등 아래, 하린의 얼굴이 부드럽게 물든다.',
		type: 'narration',
	  },
	  {
		script: '그 순간— 갑자기 불어오는 바람에 그녀의 머리카락이 살짝 흩날린다.',
		effect_sound_id: effectSoundId.wind,
		type: 'narration',
	  },
	  {
		script: '나도 모르게, 그 장면을 오래 바라보게 된다.',
		type: 'narration',
	  },
	  {
		script: '…응? 왜 그렇게 봐?',
		character_id: characterId.harin,
		character_image_id: characterImageId.harin_basic,
		type: 'text',
	  },
	  {
		script: '…아, 아니요.',
		character_id: characterId.hero,
		type: 'text',
	  },
	  {
		script: '오늘은 이쯤에서 들어갈까?',
		character_id: characterId.harin,
		type: 'text',
	  },
	  {
		script: '그녀는 가볍게 손을 흔들고, 기숙사 방향으로 발걸음을 옮긴다.',
		not_character: true,
		type: 'narration',
	  },
	  {
		script: '…하린 씨는 참, ',
		type: 'narration',
	  },
	  {
		script: '그냥 스쳐도 잔향이 오래 남는 사람이다.',
		type: 'narration',
	  },
	].map((data, i) => ({ ...data, id: generateId(), index: i + 1 })),
  }
  
module.exports = {chapter1Event1, chapter1Event2, chapter1Event3, chapter1Event4, chapter1Event5, characterId}