import profileReducer from "./profile/profileReducer";
import {combineReducers, createStore} from 'redux';
import chatsReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messageReducer
});


export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
        window.__REDUX_DEVTOOLS_EXTENSION__() );




