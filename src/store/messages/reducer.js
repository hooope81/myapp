import {ADD_MESSAGE} from './actions';

const initialState = {
    messageList: {}
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            const currentList = state.messageList[action.chatId] || [];

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`
                        }
                    ]
                }
            }

        default:
            return state
    }
}

export default messageReducer;