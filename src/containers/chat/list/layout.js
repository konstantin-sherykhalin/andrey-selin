import React from 'react';
import {Platform,StatusBar,FlatList,Image,ScrollView,Switch,Text,TouchableOpacity,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withNavigation} from 'react-navigation';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
		borderRadius: 42,
		backgroundColor: '#fff',
		// shadowOffset: {
		// 	height: 2,
		// 	width: 0
		// },
		// shadowRadius: 20,
		// shadowOpacity: 0.25,
		// shadowColor: '#000',
		// elevation: 1,
	},
	list: {
		padding: 30,
	},
	item: {
		alignItems: 'center',
		padding: 15,
	},
	item_text: {
		color: '#102841',
		fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '300',
	},
	separator: {
		height: 1, width: '100%',
		backgroundColor: '#d8d8d8',
	},
});

export default class ChatListComponentLayout extends React.Component {
	state = {
	};

	componentDidMount() {
	}

	render() {
		let {props,state} = this;

		let list = [
			{id:1,text:'Things'},
			{id:2,text:'Stuff chat'},
			{id:3,text:'Another one'},
		];

		return (
			<View style={styles.container}>
				<FlatList
					style={styles.list}
					data={list}
					renderItem={({item}) => <Item {...item} />}
					ItemSeparatorComponent={Separator}
					keyExtractor={item => item.id+''}
					// onRefresh={this.props.reload}
					// refreshing={this.props.loading}
				/>
			</View>
		);
	}
};

const Item = withNavigation((props) => (
	<TouchableOpacity style={styles.item} onPress={_=>props.navigation.push('chat_view')}>
		<Text style={styles.item_text}>{props.text}</Text>
	</TouchableOpacity>
));

const Separator = () => (
	<View style={styles.separator} />
);
