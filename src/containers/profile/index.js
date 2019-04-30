import {connect} from 'react-redux';

import {change_user,module as user_module} from '../../redux/user';
import Component from './component';

const mapStateToProps = (state) => ({...state[user_module]});

const mapDispatchToProps = {
	change_user,
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
