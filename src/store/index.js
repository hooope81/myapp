import profileReducer from "./profile/profileReducer";
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import chatsReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";
import gistsReducer from './gists/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messageReducer,
  gists: gistsReducer
});

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));


