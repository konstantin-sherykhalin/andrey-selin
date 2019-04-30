import React from 'react';
import {Keyboard,Platform,StatusBar,FlatList,Image,ScrollView,Switch,Text,TextInput,TouchableOpacity,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withNavigation} from 'react-navigation';

import TopBar from '../../top_bar';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		flex: 1,
		margin: 20,
		borderRadius: 42,
		backgroundColor: '#e5eef3',
		shadowOffset: {
			height: 2,
			width: 0
		},
		shadowRadius: 20,
		shadowOpacity: 0.25,
		shadowColor: '#000',
		elevation: 1,
	},
	list: {
		flex: 1,
		margin: -20, marginBottom: 0,
	},
	message_container_left: {
		alignItems: 'flex-start',
		width: '100%',
	},
	message_container_right: {
		alignItems: 'flex-end',
		width: '100%',
	},
	message: {
		width: '80%',
		margin: 10,
		paddingVertical: 10, paddingHorizontal: 20,
		borderRadius: 16,
		backgroundColor: '#fff',
		shadowOffset: {
			height: 2,
			width: 0
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
		shadowColor: '#000',
		elevation: 2,
	},
	message_left: {
		borderBottomLeftRadius: 0,
	},
	message_right: {
		borderBottomRightRadius: 0,
	},
	message_title: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	message_text: {
		color: '#102841',
		fontSize: 21, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	message_date: {
		color: '#102841',
		fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	message_code: {
		color: '#102841',
		fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	new: {
		marginTop: 10, marginBottom: 20, marginHorizontal: 40,
	},
	new_message: {
		padding: 20,
	},
	new_message_text: {
		marginVertical: 10,
		color: '#102841',
		fontSize: 10, fontFamily: 'Helvetica Neue', fontWeight: '300',
		textAlign: 'center',
	},
	new_message_input: {
		height: 40,
		marginVertical: 7, paddingHorizontal: 10,
		borderWidth: 1, borderColor: '#e7e7e7',
		borderRadius: 7,
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	new_message_button: {
		marginVertical: 7,
	},
	primary_button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 7,
		backgroundColor: '#5d9cff',
	},
	primary_button_text: {
		color: '#fff',
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	secondary_button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderWidth: 1, borderColor: '#5d9cff',
		borderRadius: 7,
		backgroundColor: '#fff',
	},
	secondary_button_text: {
		color: '#5d9cff',
		fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
});

export default withNavigation(class ChatListComponentLayout extends React.Component {
	state = {
		message: '',
		opened: false,
		keyboard: 0,
	};

	// Следим за клавиатурой, чтоб менять отступы
	componentDidMount() {
		this.keyboard_did_show = Keyboard.addListener('keyboardDidShow',e=>this.setState({keyboard:e.endCoordinates.height}));
		this.keyboard_did_hide = Keyboard.addListener('keyboardDidHide',_=>this.setState({keyboard:0}));
	}
	componentWillUnmount() {
		this.keyboard_did_show.remove();
		this.keyboard_did_hide.remove();
	}

	// Отправка сообщения
	add_message = () => {
		if(!this.state.message.length) return;

		this.props.add_message({text:this.state.message});
		this.setState({message:'',opened:false});
	}
	toggle_new_message = () => this.setState(state => ({opened:!state.opened}));

	render() {
		let {props,state} = this;

		return (
			<View style={styles.container}>
				<TopBar left="back" text={'Chats / '+props.title} />
				<View style={styles.main}>
					<>
					<View style={styles.list}>
							<FlatList
								data={props.list}
								renderItem={({item}) => <Item {...item} />}
								ListHeaderComponent={state.opened ? (
									<Item
										new={true}
										text={state.message}
										keyboard={state.keyboard}
										change={message => this.setState({message})}
										add={this.add_message}
										close={this.toggle_new_message}
									/>
								) : null}
								inverted={true}
								keyExtractor={item => item.id+''}
								onRefresh={this.props.load_new}
								refreshing={this.props.loading_new}
								keyboardDismissMode='on-drag'
								keyboardShouldPersistTaps='always'
							/>
					</View>
					{!state.opened && (
						<View style={styles.new}>
							<TouchableOpacity style={styles.primary_button} onPress={this.toggle_new_message}>
								<Text style={styles.primary_button_text}>Add message</Text>
							</TouchableOpacity>
						</View>
					)}
					</>
				</View>
			</View>
		);
	}
});

const Item = withNavigation((props) => (
	props.new ? (
		<View style={[styles.message_container_right,{marginBottom:props.keyboard?props.keyboard-190:10}]}>
			<View style={[styles.message,styles.message_right]}>
				<View style={styles.new_message}>
					<Text style={styles.new_message_text}>Type in thing you would like to do:</Text>
					<TextInput style={styles.new_message_input} value={props.text} onChangeText={props.change} />
					<TouchableOpacity style={[styles.new_message_button,styles.primary_button]} onPress={props.add}>
						<Text style={styles.primary_button_text}>Do thing</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.new_message_button,styles.secondary_button]} onPress={props.close}>
						<Text style={styles.secondary_button_text}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	) : (
		<View style={props.we ? styles.message_container_right : styles.message_container_left}>
			<View style={[styles.message,props.we ? styles.message_right : styles.message_left]}>
				<View style={styles.message_title}>
					<Text style={styles.message_text}>{props.text}</Text>
					<Text style={styles.message_date}>{props.date.toLocaleString()}</Text>
				</View>
				<Text style={styles.message_code}>{props.from} > {props.to}</Text>
			</View>
		</View>
	)
));
