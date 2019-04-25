import {connect} from 'react-redux';

import {module as user_module} from '../../../redux/user';
import Component from './component';

const mapStateToProps = (state) => ({...state[user_module]});

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
