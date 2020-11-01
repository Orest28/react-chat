import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducer/index";
import storage from 'redux-persist/lib/storage';

const initialState = {};

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [thunk];

const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleWare))
);

const persistor = persistStore(store);

export {persistor, store};