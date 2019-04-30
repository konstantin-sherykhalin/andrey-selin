import {connect} from 'react-redux';

import {module as user_module} from '../../../redux/user';
import {
	load,
	add_row,
	change_row,
	delete_row,
	module as chat_module
} from '../../../redux/chat';
import Component from './component';

const mapStateToProps = (state) => ({
	user: state[user_module],
	chat: state[chat_module],
});

const mapDispatchToProps = {
	load,
	add_row,
	change_row,
	delete_row,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
