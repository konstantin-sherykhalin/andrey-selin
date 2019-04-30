// Кнопка назад

import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Svg,Polyline} from 'react-native-svg';
import {withNavigation} from 'react-navigation';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		// backgroundColor: '#ddd',
	},
});

export default withNavigation(({navigation}) => (
	<TouchableOpacity style={styles.container} onPress={_=>navigation.goBack()}>
		<Svg height="24" width="24" viewBox='0 0 24 24'>
			<Polyline
				points="17,20 7,12 17,4 7,12"
				stroke={'#102841'}
				strokeWidth="2"
			/>
		</Svg>
	</TouchableOpacity>
));
