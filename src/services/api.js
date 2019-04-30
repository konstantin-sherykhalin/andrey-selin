import {NetInfo} from 'react-native';

var domain = '';

export default async function(method,type,data = {}) {
	if(method.substr(-1) == '/') method = method.substr(0,-1);
	if(method.substr(0,1) != '/') method = '/'+method;
	if(methods.indexOf(method) != -1) {
		console.log("API: "+domain+method,type,data);
		try {
			let res = await fetch(domain+method,{
				method: type,
				// mode: 'no-cors',
				// crossDomain: true,
				headers: {
					'Accept':		'application/json',
					'Content-Type':	'application/json',
				},
				body: JSON.stringify(data),
			});

			// yield new Promise(resolve => setTimeout(resolve,1000));

			if(res.status == 200) {
				let data = await res.json();
				if(data.status != "ok") {
					return {error:{message:data.error}};
				} else {
					return {response:data};
				}
			} else if(res.status == 500) {
				return {error:{code:res.status,message:'Сервер не доступен'}};
			} else {
				console.log(res);

				let connection_info = await NetInfo.getConnectionInfo();
				if(connection_info.type == 'none') return {error:{message:'Нет интернета'}};

				return {error:{code:res.status,message:'Проблемы со связью'}};
			}
		} catch(e) {
			console.log(e);
			return {error:{message:'Не удается выполнить запрос'}};
		}
	} else {
		console.log("Неизвестный метод АПИ: ",method);
	}
}

var methods = [
	'/user/get_code',
	'/user/sign_in',
	'/user/get',
	'/user/save',

	'/chat/get_list',
	'/chat/get',
	'/chat/messages/post',
];
