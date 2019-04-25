import React			from 'react';
import {View} 			from 'react-native';
import EStyleSheet		from 'react-native-extended-stylesheet';

import ChatListScreen	from '../../containers/chat/list';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e4f0f7',
	},
});

const page_title = '';

export default () => (
	<View style={styles.container}>
		<ChatListScreen/>
	</View>
);
