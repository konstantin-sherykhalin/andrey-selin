import {combineReducers,createStore} from 'redux';

import smoke,		{module as smoke_module}	from './smoke';		// Затемнение
import user,		{module as user_module}		from './user';		// Пользователь
import chat,		{module as chat_module}		from './chat';		// Беседы

// Создаем хранилище
const store = createStore(combineReducers({
	[smoke_module]:	smoke,
	[user_module]:	user,
	[chat_module]:	chat,
}));

export default store;
