import {connect} from 'react-redux';

import {change_user,module as user_module} from '../../redux/user';
import {
	open_smoke,
	close_smoke,
	module as smoke_module
} from '../../redux/smoke';

import Component from './component';

const mapStateToProps = (state) => ({...state[user_module]});

const mapDispatchToProps = {
	change_user,
	open_smoke,
	close_smoke,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
