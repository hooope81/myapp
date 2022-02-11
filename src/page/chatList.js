import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addChat, delChat } from '../store/chats/actions';
import ChatListMarkup from './сhatListMarkup';


const ChatList = () => {

    const chats = useSelector(state => state.chats.chatList);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState();
    const dispatch = useDispatch();



    const handleOpen = () => {
        setVisible(true);
    }

    const handleClose = () => {
        setVisible(false);
    }

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName('');
        handleClose();
    }

    const onDelChat = (index) => {
        dispatch(delChat(index));


    }


    return (
        <ChatListMarkup 
            handleOpen = {handleOpen}
            visible = {visible}
            handleClose = {handleClose}
            newChatName = {newChatName}
            handleChange = {handleChange}
            onAddChat = {onAddChat}
            chats = {chats}
            chatId = {chatId}
            onDelChat = {onDelChat}
        />
    )

}

export default ChatList;