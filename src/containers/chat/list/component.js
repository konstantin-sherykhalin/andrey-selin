import React from 'react';

import config	from '../../../config';

import alert	from '../../../services/alert';

import {request as user_request}	from '../../../redux/user';
import {request as chat_request}	from '../../../redux/chat';

import Layout from './layout';

export default class ChatListComponent extends React.Component {
	state = {
		loading: false,
	};

	componentDidMount() {
		this.load_data();
	}

	// Загрузка списка бесед
	load_data = async () => {
		await this.setState({loading:true});

		let {response,error} = await chat_request.get_list(this.props.user.token);
		if(response) {
			this.props.load(response.items);
		}
		if(error) {
		}

		await this.setState({loading:false});
	}

	render() {
		let {props,state} = this;

		return (<Layout data={props.chat.chat_list} loading={state.loading} reload={this.load_data} />);
	}
};
