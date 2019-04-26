import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import config from '../config';

const scale = Dimensions.get('window').width/config.base_width;

import ChatListScreen	from '../screens/chat/list';
import ChatViewScreen	from '../screens/chat/view';

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
				height: 70*scale,
				borderBottomWidth: 0,
				backgroundColor: '#e4f0f7',
			},
			headerBackTitle: null,
			headerTitleStyle: {
				color: '#102841',
				fontSize: 16*scale, fontFamily: 'Helvetica Neue', fontWeight: '300',
			},
		},
	},
);
