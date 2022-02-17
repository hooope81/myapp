import MessageList from "./messageList";
import ChatList from './chatList';
import React from 'react';
import ControlPanel from "./controlePanel";

const Chat = () => {
    return (
        <div className="boxchats">
            <ChatList />
            <div className='boxApp'>
                <MessageList />
                <ControlPanel />
            </div>
        </div>
    );
};
export default Chat;

