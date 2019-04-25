import React from 'react';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';

import BottomTabs		from '../containers/bottom_tabs';

import DashboardScreen	from '../screens/dashboard';
import ProfileScreen	from '../screens/profile';
import SettingsScreen	from '../screens/settings';

import ChatNavigator	from './chat';

export default createAppContainer(createBottomTabNavigator(
	{
		dashboard : {
			screen: DashboardScreen,
			navigationOptions: {
				title: 'Dashboard',
			},
		},
		profile : {
			screen: ProfileScreen,
			navigationOptions: {
				title: 'My Profile',
			},
		},
		chats : {
			screen: ChatNavigator,
			navigationOptions: {
				title: 'Chats',
			},
		},
		settings : {
			screen: SettingsScreen,
			navigationOptions: {
				title: 'Settings',
			},
		},
	},
	{
		initialRouteName: 'profile',
		tabBarComponent: BottomTabs,
	}
));
