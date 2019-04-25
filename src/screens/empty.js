import React from 'react';
import {StatusBar,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e4f0f7',
	},
});

export default () => <View style={styles.container} />
