import React from 'react';
import {createStackNavigator} from 'react-navigation';

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
	}
);
