import React			from 'react';
import {View} 			from 'react-native';
import EStyleSheet		from 'react-native-extended-stylesheet';

import LoginScreen		from '../containers/login';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e4f0f7',
	},
});

const page_title = 'Login';

export default (props) => (
	<View style={styles.container}>
		<LoginScreen next={props.next} />
	</View>
);
