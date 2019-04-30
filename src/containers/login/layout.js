import React from 'react';
import {findNodeHandle,Keyboard,Platform,StatusBar,Image,KeyboardAvoidingView,ScrollView,Text,TextInput,TouchableOpacity,View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import EStyleSheet from 'react-native-extended-stylesheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import alert from '../../services/alert';

import {request} from '../../redux/user';

import TopBar from '../top_bar';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		flex: 1,
		marginHorizontal: 20,
		paddingVertical: 0,
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
	scroll: {
		paddingHorizontal: 30,
	},
	image_area: {
		alignItems: 'center',
		margin: 40,
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
		borderWidth: 1, borderColor: '#e7e7e7',
		borderRadius: 7,
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 7,
		backgroundColor: '#5d9cff',
	},
	button_disabled: {
		opacity: 0.5,
	},
	button_text: {
		color: '#fff',
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	under: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	under_text: {
		paddingTop: 10, paddingBottom: 20,
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

		code_id: '',
	};

	componentDidMount() {
		// this.phone_input.focus();
	}

	change_phone = (phone) => this.setState({phone});
	change_code  = (code)  => this.setState({code});

	// Запрос кода
	ask_code = async () => {
		let state = this.state;

		if(!state.phone.length) {
			await alert("Введите ваш номер телефона");
			this.phone_input.focus();
			return;
		}

		// Показываем следующий экран
		await this.setState({stage:1});
		this.code_input.focus();

		let {response,error} = await request.send_code(state.phone);
		if(response) {
			await this.setState({code_id:response.code_id});
		}
		if(error) {
			alert("Не удалось совершить запрос","Попробуйте еще раз");
		}
	}
	// Вход
	login = async () => {
		let state = this.state;

		if(!state.code.length) {
			await alert("Введите код из смс");
			this.code_input.focus();
			return;
		}
		Keyboard.dismiss();

		this.props.login({
			phone:		state.phone,
			code:		state.code,
			code_id:	state.code_id,
		});
	}

	render() {
		let {props,state} = this;

		return (
			<View style={[styles.container,{paddingTop:getStatusBarHeight()}]}>
				<TopBar text='Login' />
				<View style={styles.main}>
					<KeyboardAwareScrollView
						innerRef={ref => this.scroll=ref}
						contentContainerStyle={[styles.scroll,state.keyboard ? {} :{minHeight:'100%'}]}
						keyboardDismissMode='on-drag'
						keyboardShouldPersistTaps='always'
						enableOnAndroid={true}
						extraScrollHeight={50}
					>
						<View style={styles.image_area}>
							<Image style={styles.image} />
						</View>
						<View style={styles.block}>
						{state.stage == 0 ? (
							<>
							<Text style={styles.tint}>Type your telephone{'\n'}number to login:</Text>
							<TextInput
								ref={ref => this.phone_input=ref}
								style={styles.input}
								value={state.phone}
								keyboardType='phone-pad'
								onChangeText={this.change_phone}
							/>
							<TouchableOpacity style={styles.button} onPress={this.ask_code}>
								<Text style={styles.button_text}>Get code</Text>
							</TouchableOpacity>
							</>
						) : state.stage == 1 ? (
							<>
							<Text style={styles.tint}>Please enter the code{'\n'}we sent you via sms:</Text>
							<TextInput
								ref={ref => this.code_input=ref}
								style={styles.input}
								value={state.code}
								onChangeText={this.change_code}
							/>
							<TouchableOpacity style={styles.button} onPress={this.login}>
								<Text style={styles.button_text}>Login</Text>
							</TouchableOpacity>
							</>
						) : null}
						</View>
						<View style={[styles.under,{flex:1}]}>
							<Text style={styles.under_text}>(c) Bla bla bla</Text>
						</View>
					</KeyboardAwareScrollView>
				</View>
				<View style={{height:70}} />
			</View>
		);
	}
};
