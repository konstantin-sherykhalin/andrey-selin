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

	if(type == LOAD)	return {...st,chat_list:payload};
	if(type == ADD)		return {...st,chat_list:[...st.chat_list,payload]};
	if(type == UPDATE)	return {...st,chat_list:st.chat_list.map(e => e.id==payload.id ? payload : e)};
	if(type == DELETE)	return {...st,chat_list:st.chat_list.filter(e => e.id!=payload)};

	return {...st};
}

// Действия
export const load		= (payload) => ({type:LOAD,		payload});
export const add_row	= (payload) => ({type:ADD,		payload});
export const change_row	= (payload) => ({type:UPDATE,	payload});
export const delete_row	= (payload) => ({type:DELETE,	payload});

export const request = {
	// Получение списка
	get_list: async (token) => {
		await new Promise(res => setTimeout(res,100));
		let response = {
			"status": "ok",
			"data": {
				"chats": [
					{
						"id": "IWFBPAi",
						"title": "Things"
					},
					{
						"id": "34gbwIW",
						"title": "Stuff chat"
					},
					{
						"id": "fgjbea3D",
						"title": "Another one"
					}
				]
			}
		};
		return {
			response: {
				items: response.data.chats.map(e => ({
					id:		e.id,
					title:	e.title,
				})),
			},
		};
	},
	// Получение сообщений
	get_messages: async (id) => {
		await new Promise(res => setTimeout(res,100));
		let response = {
			"status": "ok",
			"data": {
				"id": "IWFBPAi",
				"messages": [
					{
						"id": "rfh34fh409234jf9rhf6",
						"text": "One thing",
						"createdAt": "10.02.2019 20:17",
						"details": {
							"from": "af23fa2b022ce24bb",
							"to": "qerverbvpierbvpqr"
						}
					}, {
						"id": "rfh34fh409234jf9rhf7",
						"text": "Another thing",
						"createdAt": "10.02.2019 20:17",
						"details": {
							"from": "qerverbvpierbvpqr",
							"to": "af23fa2b022ce24bb"
						}
					}, {
						"id": "rfh34fh409234jf9rhf8",
						"text": "How are you",
						"createdAt": "10.02.2019 20:17",
						"details": {
							"from": "af23fa2b022ce24bb",
							"to": "qerverbvpierbvpqr"
						}
					}, {
						"id": "rfh34fh409234jf9rhf9",
						"text": "Whazuup",
						"createdAt": "10.02.2019 20:17",
						"details": {
							"from": "qerverbvpierbvpqr",
							"to": "af23fa2b022ce24bb"
						}
					},
				]
			}
		};
		return {
			response: {
				items: response.data.messages.map(e => ({
					id:		e.id,
					text:	e.text,
					date:	new Date(e.createdAt),
					from:	e.details.from,
					to:		e.details.to,
				})),
			},
		};
	},
	// Отправка сообщения
	post_message: async (data) => {
		await new Promise(res => setTimeout(res,100));
		let response = {
			"status": "ok",
			"data": {
				"id": "jneqrvijeqnrv[oeqnrv"+Math.random().toString(36),
				"chatId": "IWFBPAi",
				"text": "input text",
				"createdAt": "10.02.2019 20:17",
				"details": {
					"from": "qerverbvpierbvpqr",
					"to": "af23fa2b022ce24bb"
				}
			}
		};
		return {
			response: {
				id:			response.data.id,
				chat_id:	response.data.chatId,
				text:		response.data.text,
				date:		new Date(response.data.createdAt),
				from:		response.data.details.from,
				to:			response.data.details.to,
			}
		};
	},
};
