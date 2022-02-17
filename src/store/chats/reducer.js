import { ADD_CHAT } from './actions';
import { DEL_CHAT } from './actions';
import {CHATS_UPDATE} from './actions';

const initialState = {
    chatList: []
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name
                    }
                ]
            }
        case DEL_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.index),
                    ...state.chatList.slice(action.index + 1)
                ]
            }
        case CHATS_UPDATE:
            return {
                ...state,
                chatList: action.chats
            }

        default:
            return state
    }
}
export default chatsReducer;
