// Навигатор чатов

import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import config from '../config';

import BackButton from '../containers/back_button';

import ChatListScreen	from '../screens/chat/list';
import ChatViewScreen	from '../screens/chat/view';

const scale = Dimensions.get('window').width/config.base_width;

export default createStackNavigator(
	{
		chat_list: {
			screen: ChatListScreen,
			navigationOptions: {
				title: 'Chats',
			},
		},
		chat_view: {
			screen: ChatViewScreen,
			navigationOptions: {
				title: 'Chat',
			},
		},
	},
	{
		initialRouteName: 'chat_list',
		defaultNavigationOptions: {
			headerStyle: {
				// display: 'none',
				height: 0*scale,
				borderBottomWidth: 0,
				backgroundColor: '#e4f0f7',
			},
			headerLeft: null,
			headerTitleStyle: {
				display: 'none',
				color: '#102841',
				fontSize: 16*scale, fontFamily: 'Helvetica Neue', fontWeight: '300',
			},
		},
	},
);
