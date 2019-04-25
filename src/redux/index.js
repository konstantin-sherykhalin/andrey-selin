import {combineReducers,createStore} from 'redux';

import user,		{module as user_module}		from './user';		// Пользователь
import chat,		{module as chat_module}		from './chat';		// Беседы

// Создаем хранилище
const store = createStore(combineReducers({
	[user_module]:	user,
	[chat_module]:	chat,
}));

export default store;
