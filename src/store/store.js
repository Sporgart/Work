import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

import profileReducer from './reducers/profileReducer';

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, profileReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
