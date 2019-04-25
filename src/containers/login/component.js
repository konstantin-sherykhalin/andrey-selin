import React from 'react';

import config	from '../../config';

import alert	from '../../services/alert';

import {request as user_request}	from '../../redux/user';
import {request as chat_request}	from '../../redux/chat';

import Layout from './layout';

export default class LoginComponent extends React.Component {
	state = {
	};

	componentDidMount() {
	}

	next = () => {
		this.props.next();
	}

	render() {
		let {props,state} = this;
		console.log(props);

		return (<Layout {...state} next={this.next} />);
	}
};
