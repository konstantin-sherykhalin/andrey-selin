// Дымовая завеса с ожиданием

import React from 'react';
import {ActivityIndicator,View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';

import {module as smoke_module} from '../redux/smoke';

const mapStateToProps = state => ({...state[smoke_module]});

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		position: 'absolute',
		height: '100%', width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
	}
});

export default connect(mapStateToProps)(({visible}) => visible ? (
	<View style={styles.container}>
		<ActivityIndicator size='large' />
	</View>
) : null);
