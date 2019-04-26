import React from 'react';
import {Image,Text,TouchableWithoutFeedback,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SafeAreaView} from 'react-navigation';

const styles = EStyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 70,
		paddingHorizontal: 20,
		backgroundColor: '#e4f0f7',
	},
	tab: {
		alignItems: 'center',
		opacity: 0.5,
	},
	tab_image: {
		height: 30, width: 30,
		marginBottom: 5,
		borderWidth: 1, borderColor: '#494949',
		borderRadius: 15,
	},
	tab_text: {
		color: '#102841',
		fontSize: 11, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	tab_selected: {
		opacity: 1,
	},
	tab_selected_image: {
	},
	tab_selected_text: {
	},
});

export default (props) => {
	let state = props.navigation.state;
	console.log(props);

	return (
		<SafeAreaView>
		<View style={styles.container}>
		{state.routes.map((tab,i) => (
			<TouchableWithoutFeedback key={i} onPress={_=>props.jumpTo(tab.key)}>
			<View style={[styles.tab,state.index==i ? styles.tab_selected : {},{width:(100/state.routes.length)+'%'}]}>
				<View style={[styles.tab_image,state.index==i ? styles.tab_selected_image : {}]}>
					{props.renderIcon({route:tab})}
				</View>
				<Text style={[styles.tab_text,state.index==i ? styles.tab_selected_text : {}]}>
					{props.getLabelText({route:tab})}
				</Text>
			</View>
			</TouchableWithoutFeedback>
		))}
		</View>
		</SafeAreaView>
	);
}
