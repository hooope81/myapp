import profileReducer from "./profile/profileReducer";
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import chatsReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
    key: 'root',
    storage,
  }
  
  const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messageReducer
});

  const persistedReducer = persistReducer(persistConfig, allReducers);


export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(mySaga);

export const persistor = persistStore(store);
