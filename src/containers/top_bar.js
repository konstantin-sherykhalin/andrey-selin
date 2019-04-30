// Верхняя панель навигации

import React from 'react';
import {Text,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BackButton from './back_button';

const styles = EStyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60, width: '100%',
	},
	left: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60, width: 60,
	},
	title: {
		color: '#102841',
		fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	right: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60, width: 60,
	},
});

const prepare_left = (data) => {
	if(data == 'back') return <BackButton/>;
	return data;
}

export default (props) => (
	<View style={styles.container}>
		<View style={styles.left}>{prepare_left(props.left)}</View>
		<Text style={styles.title}>{props.text}</Text>
		<View style={styles.right}>{props.right}</View>
	</View>
);
