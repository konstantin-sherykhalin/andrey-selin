import React from 'react';
import {Platform,StatusBar,Image,ScrollView,Switch,Text,TouchableOpacity,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import alert	from '../../services/alert';

import TopBar from '../top_bar';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.select({ios:24,android:StatusBar.currentHeight}),
	},
	scroll: {
		flex: 1,
		marginHorizontal: 20,
		borderRadius: 42,
		backgroundColor: '#fff',
		shadowOffset: {
			height: 2,
			width: 0
		},
		shadowRadius: 20,
		shadowOpacity: 0.25,
		shadowColor: '#000',
		elevation: 1,
	},
	main: {
		padding: 30,
	},
	image_area: {
		alignItems: 'center',
		marginBottom: 35,
	},
	image: {
		height: 120, width: 120,
		borderWidth: 1, borderColor: '#d8d8d8',
		borderRadius: 60,
	},
	name: {
		color: '#102841',
		fontSize: 20, fontFamily: 'Helvetica Neue', fontWeight: '300',
		textAlign: 'center',
	},
	table: {
		marginVertical: 30,
	},
	table_row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
		borderBottomWidth: 1, borderColor: '#e7e7e7',
	},
	table_row_left: {
		flex: 1,
	},
	table_row_right: {
		alignItems: 'flex-end',
		width: '20%',
	},
	table_text: {
		color: '#102841',
		fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40, width: '100%',
		borderRadius: 7,
		backgroundColor: '#5d9cff',
	},
	button_text: {
		color: '#fff',
		fontSize: 14,
	},
});

export default class ProfileComponentLayout extends React.Component {
	state = {
	};

	componentDidMount() {
	}

	render() {
		let {props,state} = this;

		return (
			<View style={styles.container}>
				<TopBar text='My profile' />
				<ScrollView style={styles.scroll}>
					<View style={styles.main}>
						<View style={styles.image_area}>
							<Image style={styles.image} />
						</View>
						<Text style={styles.name}>Ivan Petrov</Text>
						<View style={styles.table}>
							<View style={styles.table_row}>
								<View style={styles.table_row_left}>
									<Text style={styles.table_text}>Table row 1</Text>
								</View>
								<View style={styles.table_row_right}>
									<Text style={styles.table_text}>12%</Text>
								</View>
							</View>
							<View style={styles.table_row}>
								<View style={styles.table_row_left}>
									<Text style={styles.table_text}>Another table row</Text>
								</View>
								<View style={styles.table_row_right}>
									<Text style={styles.table_text}>Always</Text>
								</View>
							</View>
							<View style={styles.table_row}>
								<View style={styles.table_row_left}>
									<Text style={styles.table_text}>Something</Text>
								</View>
								<View style={styles.table_row_right}>
									<Switch value={true} />
								</View>
							</View>
							<View style={styles.table_row}>
								<View style={styles.table_row_left}>
									<Text style={styles.table_text}>Another thing</Text>
								</View>
								<View style={styles.table_row_right}>
									<Switch />
								</View>
							</View>
						</View>
						<TouchableOpacity style={styles.button} onPress={this.save}>
							<Text style={styles.button_text}>Save</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
};
