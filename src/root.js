import React					from 'react';
import {Dimensions,StatusBar}	from 'react-native';
import EStyleSheet				from 'react-native-extended-stylesheet';
import {
	createAppContainer,
	createStackNavigator,
	NavigationActions
}								from 'react-navigation';
import {Provider}				from 'react-redux';

import config					from './config';

import Empty					from './screens/empty';
import Login					from './screens/login';

import Navigator				from './navigation/tab';

import store					from './redux';

// Глобальные стили
EStyleSheet.build({
	$scale: 1*Dimensions.get('window').width/config.base_width,
});

// Полоска вверху экрана
StatusBar.setBarStyle('dark-content',true);

export default class Router extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'start',
			page: 'navigator',
		};
	}

	async componentDidMount() {
		// Это чтобы все стереть
		// await AsyncStorage.removeItem(config.storage_name);
		// console.log(await AsyncStorage.getItem(config.storage_name));
		// return;

		// let data = JSON.parse(await AsyncStorage.getItem(config.storage_name)) ?? {};
		// console.log(data);
		// this.set_page('login');
	}

	set_page = (page) => this.setState({page});

	render() {
		return (
			<Provider store={store}>
				{this.state.page == 'start'			? (<Empty/>)	: null}
				{this.state.page == 'login'			? (<Login		next={_=>this.set_page('navigator')} />)	: null}
				{this.state.page == 'navigator'		? (<Navigator	ref={ref => config.navigator_ref=ref} />)	: null}
			</Provider>
		);
	}
}
