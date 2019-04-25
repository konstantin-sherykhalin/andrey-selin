import React			from 'react';
import {View} 			from 'react-native';
import EStyleSheet		from 'react-native-extended-stylesheet';

import ProfileScreen	from '../containers/profile';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

const page_title = '';

export default () => (
	<View style={styles.container}>
		<ProfileScreen/>
	</View>
);
