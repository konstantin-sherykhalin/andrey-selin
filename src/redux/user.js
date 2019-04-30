import config from '../config';

export const ReducerRecord = () => ({
	phone: '',
	token: '',
	name: '',
	family: '',
	image_url: '',
	data: {},
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

	if(type == UPDATE)	return {...st,...payload};

	return {...st};
}

// Действия
export const change_user	= (payload) => ({type:UPDATE,	payload});

export const request = {
	// Отправка кода подтверждения
	send_code: async (phone) => {
		let response = {
			"status": "ok",
			"data": {
				"codeId": "qeiruvqpireub"
			}
		};
		return {
			response: {
				code_id: response.data.codeId,
			}
		};
	},
	// Вход в профиль
	sign_in: async (data) => {
		await new Promise(res => setTimeout(res,100));
		let response = {
			"status": "ok",
			"authToken": "qerverbvpierbvpqr"
		};
		return {
			response: {
				token: response.authToken,
			},
		};
	},

	// Получение данных
	get: async (token) => {
		await new Promise(res => setTimeout(res,100));
		let response = {
			"status": "ok",
			"data": {
				"userPic": {
					"profile": "https://pp.userapi.com/c844321/v844321567/1ed7bd/6RHWhSu12WA.jpg"
				},
				"firstName": "Иван",
				"lastName": "Петров",
				"table": {
					"one": "12%",
					"two": "Always",
					"three": false,
					"four": true
				}
			}
		};
		return {
			response: {
				name:		response.data.firstName,
				family:		response.data.lastName,
				image_url:	response.data.userPic.profile,
				data:		response.data.table,
			},
		};
	},
	// Сохранение данных
	save: async (data) => {
		await new Promise(res => setTimeout(res,100));
		return {response:1};
	},
};
