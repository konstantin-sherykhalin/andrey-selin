import config from '../config';

export const ReducerRecord = () => ({
	chat_list: [],
});

// Постоянные
export const module	= 'chat';

export const LOAD	= config.name+'/'+module+'/LOAD';
export const ADD	= config.name+'/'+module+'/ADD';
export const UPDATE	= config.name+'/'+module+'/UPDATE';
export const DELETE	= config.name+'/'+module+'/DELETE';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	if(type == LOAD)	;
	if(type == ADD)		;
	if(type == UPDATE)	;
	if(type == DELETE)	;

	return {...st};
}

// Действия
export const load		= (payload) => ({type:LOAD,		payload});
export const add_row	= (payload) => ({type:ADD,		payload});
export const change_row	= (payload) => ({type:UPDATE,	payload});
export const delete_row	= (payload) => ({type:DELETE,	payload});

export const request = {
};
