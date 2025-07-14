const {generateId} = require('./generateId')
const hero = '687475d50655ca93c3840443'
const heroine1 = '687475d50655ca93c3840444'
const heroine2 = '687475d50655ca93c3840445'
const villian1 = '687475d50655ca93c3840446'
const villian2 = '687475d50655ca93c3840447'
const operator = '687475d60655ca93c3840448'
const scenario1 = [
	{
		id: generateId(),
		chapter_id:'',
		next_scene_id:'',
		event:1,
		scenario:[
			{
				script:'',
				character_id:'',
				where:'',
				when:'',
				character_image_id:'',
				background_image_id:'',
				background_sound_id:'',
				type:'',
				options:[],
				action:[]
			}
		]
	}
]
const optionsExample = [
	{
		id: generateId(),
		text:'',
		score_list:[
			{id: generateId(), character_id:'', score:0}
		]
	}
]
const actionsExample = [
	{
		id: generateId(),
		type:'',
		character_image_id:'',
		background_sound_id:'',
		effect_sound_id:'',
		is_re_image:false,
		is_re_sound:false
	}
]
module.exports = {scenario1}