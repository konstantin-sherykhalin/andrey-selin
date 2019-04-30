import React from 'react';

import alert	from '../../services/alert';
import st		from '../../services/storage';

import {request}	from '../../redux/user';

import Layout from './layout';

export default class LoginComponent extends React.Component {

	// Вход в профиль
	login = async (data) => {
		this.props.open_smoke();

		let {response,error} = await request.sign_in({code_id:data.code_id,code:data.code});
		if(response) {
			// Сохраняем данные в хранилище и в асинхронное хранилище
			let user_data = {phone:data.phone,token:response.token};
			this.props.change_user(user_data);
			st.merge('user',user_data);

			this.props.next();
		}
		if(error) {
			alert("Не удалось совершить запрос","Попробуйте еще раз");
		}

		this.props.close_smoke();
		this.props.next();
	}

	render() {
		let {props,state} = this;

		return (<Layout {...state} login={this.login} />);
	}
};
