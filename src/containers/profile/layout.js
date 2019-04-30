import React from 'react';
import {Platform,StatusBar,ActivityIndicator,Image,ScrollView,Switch,Text,TouchableOpacity,View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import EStyleSheet from 'react-native-extended-stylesheet';

import alert	from '../../services/alert';

import TopBar from '../top_bar';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		flex: 1,
		marginBottom: 20, marginHorizontal: 20,
		borderRadius: 36,
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
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		minHeight: '100%',
		padding: 30,
	},
	image_area: {
		alignItems: 'center',
		marginBottom: 35,
	},
	image: {
		height: 140, width: 140,
		borderWidth: 1, borderColor: '#d8d8d8',
		borderRadius: 70,
	},
	block: {
		flex: 1,
	},
	name: {
		color: '#102841',
		fontSize: 20, fontFamily: 'Helvetica Neue', fontWeight: '300',
		textAlign: 'center',
	},
	table: {
		marginVertical: 25,
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
	constructor(props) {
		super(props);

		this.state = {
			...props.data,
		};
	}

	componentDidUpdate(prev_props) {
		if(!Object.is(prev_props,this.props)) {
			this.setState(this.props.data);
		}
	}

	render() {
		let {props,state} = this;

		return (
			<View style={[styles.container,{paddingTop:getStatusBarHeight()}]}>
				<TopBar text='My profile' />
				<View style={styles.main}>
				{props.loading ? (
					<View style={styles.loading}>
						<ActivityIndicator size='large' />
					</View>
				) : (
					<ScrollView ref={ref => this.scroll=ref} contentContainerStyle={styles.scroll}>
						<View style={styles.image_area}>
							<Image style={styles.image} source={{url:state.image_url}} />
						</View>
						<View style={styles.block}>
							<Text style={styles.name}>{state.name+' '+state.family}</Text>
							<View style={styles.table}>
								<View style={styles.table_row}>
									<View style={styles.table_row_left}>
										<Text style={styles.table_text}>Table row 1</Text>
									</View>
									<View style={styles.table_row_right}>
										<Text style={styles.table_text}>{state.data.one}</Text>
									</View>
								</View>
								<View style={styles.table_row}>
									<View style={styles.table_row_left}>
										<Text style={styles.table_text}>Another table row</Text>
									</View>
									<View style={styles.table_row_right}>
										<Text style={styles.table_text}>{state.data.two}</Text>
									</View>
								</View>
								<View style={styles.table_row}>
									<View style={styles.table_row_left}>
										<Text style={styles.table_text}>Something</Text>
									</View>
									<View style={styles.table_row_right}>
										<Switch value={state.data.three} onValueChange={value => this.setState(state => ({data:{...state.data,three:value}}))} />
									</View>
								</View>
								<View style={[styles.table_row,{borderBottomWidth:0}]}>
									<View style={styles.table_row_left}>
										<Text style={styles.table_text}>Another thing</Text>
									</View>
									<View style={styles.table_row_right}>
										<Switch value={state.data.four} onValueChange={value => this.setState(state => ({data:{...state.data,four:value}}))} />
									</View>
								</View>
							</View>
							<TouchableOpacity style={styles.button} onPress={this.save}>
								<Text style={styles.button_text}>Save</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				)}
				</View>
			</View>
		);
	}
};
