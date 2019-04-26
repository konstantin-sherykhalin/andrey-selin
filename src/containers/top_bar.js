import React from 'react';
import {Text,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	top: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 80, width: '100%',
	},
	top_text: {
		color: '#102841',
		fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
});

export default (props) => (
	<View style={styles.top}>
		<Text style={styles.top_text}>{props.text}</Text>
	</View>
);
