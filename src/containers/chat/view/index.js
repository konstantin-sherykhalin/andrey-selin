import {connect} from 'react-redux';

import {module as user_module} from '../../../redux/user';
import {module as chat_module} from '../../../redux/chat';
import Component from './component';

const mapStateToProps = (state) => ({
	user: state[user_module],
	chat: state[chat_module],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
