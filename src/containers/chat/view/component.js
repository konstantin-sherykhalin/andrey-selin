import React from 'react';
import {withNavigation} from 'react-navigation';

import config	from '../../../config';

import alert	from '../../../services/alert';

import {request as user_request}	from '../../../redux/user';
import {request as chat_request}	from '../../../redux/chat';

import Layout from './layout';

export default withNavigation(class ChatViewComponent extends React.Component {
	chat_id	= this.props.navigation.getParam('id',0);
	title	= this.props.navigation.getParam('title','');
	state	= {
		list: [],
		loading_old: false,
		loading_new: false,
	};

	componentDidMount() {
		this.load_new();
	}

	// Загрузка новых сообщений
	load_new = async () => {
		this.setState({loading_new:true});

		let {response,error} = await chat_request.get_messages(this.props.user.token);
		if(response) {
			this.setState(state => ({
				list: [
					...state.list,
					...response.items.map(e => ({...e,id:e.id+'_'+Math.random(),we:e.from==this.props.user.token})),
				]
			}));
		}
		if(error) {
		}

		this.setState({loading_new:false});
	}

	// Отправка сообщения
	add_message = async (message) => {
		// Сразу добавляем в список
		let new_message = {
			id:		Math.random().toString(36),
			text:	message.text,
			date:	new Date(),
			from:	this.props.user.token,
			to:		'Somebody',
			we:		true,
		};;
		await this.setState(state => ({list:[new_message,...state.list]}));

		let {response,error} = await chat_request.post_message({message});
		if(response) {
			// Когда получен ответ от сервера, то вставляем нужные данные
			this.setState(state => ({
				list: state.list.map(e => {
					if(e.id == new_message.id) {
						return {
							...e,
							id:		response.id,
							date:	response.date,
							to:		response.to,
						};
					}
					return e;
				}),
			}));
		}
		if(error) {
			alert("Не удалось отправить сообщение","Попробуйте еще раз");
		}
	}

	render() {
		let {props,state} = this;

		return (<Layout title={this.title} {...state} load_new={this.load_new} add_message={this.add_message} />);
	}
});
