import React from 'react';
import {Platform,StatusBar,Image,Text,TextInput,TouchableOpacity,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import alert from '../../services/alert';

import TopBar from '../top_bar';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.select({ios:24,android:StatusBar.currentHeight}),
	},
	main: {
		flex: 1,
		marginHorizontal: 20,
		paddingVertical: 0, paddingHorizontal: 30,
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
	image_area: {
		alignItems: 'center',
		margin: 35,
	},
	image: {
		height: 120, width: 120,
		borderWidth: 1, borderColor: '#d8d8d8',
		borderRadius: 60,
	},
	block: {
		width: '100%',
	},
	tint: {
		color: '#102841',
		fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '300',
		textAlign: 'center',
	},
	input: {
		height: 40,
		marginVertical: 15, paddingHorizontal: 10,
		borderWidth: 1, borderColor: '#eee',
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 7,
		backgroundColor: '#5d9cff',
	},
	button_text: {
		color: '#fff',
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	under: {
		flex: 1,
		justifyContent: 'center',
	},
	under_text: {
		paddingBottom: '10%',
		color: '#102841',
		fontSize: 12, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	bottom: {
		height: 70,
	},
});

export default class LoginComponentLayout extends React.Component {
	state = {
		stage: 0,

		phone: '',
		code: '',
	};

	componentDidMount() {
		this.phone_input.focus();
	}

	change_phone = (phone) => this.setState({phone});
	change_code  = (code)  => this.setState({code});

	ask_code = async () => {
		if(this.state.phone.length) {

			await this.setState({stage:1});
			this.code_input.focus();
		}
	}
	login = async () => {
		if(this.state.code.length) {

			this.props.next();
		}
	}

	render() {
		let {props,state} = this;

		return (
			<View style={styles.container}>
				<TopBar text='Login' />
				<View style={styles.main}>
					<View style={styles.image_area}>
						<Image style={styles.image} />
					</View>
					<View style={styles.block}>
					{state.stage == 0 ? (
						<>
						<Text style={styles.tint}>Type your telephone{'\n'}number to login:</Text>
						<TextInput ref={ref => this.phone_input=ref} style={styles.input} value={state.phone} onChangeText={this.change_phone} />
						<TouchableOpacity style={styles.button} onPress={this.ask_code}>
							<Text style={styles.button_text}>Get code</Text>
						</TouchableOpacity>
						</>
					) : state.stage == 1 ? (
						<>
						<Text style={styles.tint}>Please enter the code{'\n'}we sent you via sms:</Text>
						<TextInput ref={ref => this.code_input=ref} style={styles.input} value={state.code} onChangeText={this.change_code} />
						<TouchableOpacity style={styles.button} onPress={this.login}>
							<Text style={styles.button_text}>Login</Text>
						</TouchableOpacity>
						</>
					) : null}
					</View>
					<View style={styles.under}>
						<Text style={styles.under_text}>(c) Bla bla bla</Text>
					</View>
				</View>
				<View style={styles.bottom} />
			</View>
		);
	}
};
