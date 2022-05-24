import { createStore, compose, applyMiddleware } from "redux";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import userReducer from "./reducer";


import {persistStore, persistReducer} from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const baseUrl = 'https://basic-auth-example.herokuapp.com';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)


const store = createStore(persistedReducer,
composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl)))
);

const persistor = persistStore(store)
export {store, persistor};
