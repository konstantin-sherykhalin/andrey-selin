import React from 'react';

import config	from '../../config';

import alert	from '../../services/alert';

import {request as user_request}	from '../../redux/user';
import {request as chat_request}	from '../../redux/chat';

import Layout from './layout';

export default class DashboardComponent extends React.Component {
	state = {
	};

	componentDidMount() {
	}

	render() {
		let {props,state} = this;

		return (<Layout {...state} />);
	}
};
