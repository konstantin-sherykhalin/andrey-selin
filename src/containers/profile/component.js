import React from 'react';

import alert	from '../../services/alert';
import st		from '../../services/storage';

import {request}	from '../../redux/user';

import Layout from './layout';

export default class ProfileComponent extends React.Component {
	state = {
		loading: false,
	};

	componentDidMount() {
		this.get_data();
	}

	// Получаем данные и записываем в хранилище
	get_data = async () => {
		this.setState({loading:true});
		let {response,error} = await request.get(this.props.token);
		if(response) {
			this.props.change_user(response);
			st.merge('user',response);
		}
		if(error) {
		}
		this.setState({loading:false});
	}

	render() {
		return (<Layout data={this.props} loading={this.state.loading} />);
	}
};
