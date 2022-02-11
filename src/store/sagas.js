import {put, delay, takeLatest} from 'redux-saga/effects';
import {addMessage, ADD_MESSAGE_WITH_SAGA} from './messages/actions';

function* onAddMessageWhithSaga(action){
    yield put(addMessage(action.chatId, action.message));
    if (action.message.author !=='bot'){
        const botMessage = {text: 'привет, я бот из саги!', author: 'bot' };
    yield delay(2000);
    yield put(addMessage(action.chatId, botMessage));
   
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWhithSaga);
}

export default mySaga;