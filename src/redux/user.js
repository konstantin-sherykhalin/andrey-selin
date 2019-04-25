import config from '../config';

export const ReducerRecord = () => ({
});

// Постоянные
export const module	= 'user';

export const LOAD	= config.name+'/'+module+'/LOAD';
export const ADD	= config.name+'/'+module+'/ADD';
export const UPDATE	= config.name+'/'+module+'/UPDATE';
export const DELETE	= config.name+'/'+module+'/DELETE';

// Редуктор
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	if(type == LOAD)	;
	if(type == UPDATE)	;

	return {...st};
}

// Действия
export const load		= (payload) => ({type:LOAD,		payload});
export const change		= (payload) => ({type:UPDATE,	payload});

export const request = {
};
