import { API_URL_PUBLIC } from '../contants/endpoints';
import { getGistsFailure, getGistsRequest, getGistsSuccess } from './gists/actions';
import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database';
import firebase from '../service/firebase';
import { chatListUpdate } from './chats/actions';
import { updateMessages } from './messages/actions';


export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);
        if (!res.ok) {
            throw new Error(`REquest failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    }
    catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: name }).then((res) => {
        console.log(res);
    });
};

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messageRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => console.log('removed chat', res));
    remove(messageRef).then(res => console.log('removed msg', res));
};

export const initTrackerWhithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));

    });
};

export const getMessagesByChatIdWhithFB = (chatId) => async(dispatch)=>{
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = Object.values(data);
        if(msg.length>0) {
            dispatch(updateMessages(chatId, msg));
        }
    });    
};

export const addMessageWithFB =(chatId, message) =>async() => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res)=>console.log(res));
};