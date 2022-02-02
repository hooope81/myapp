
import { useParams } from "react-router-dom";
import MessageList from "./messageList";
import ChatList from './chatList';
import NoChats from "./noChats";
import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';




const Chats = ({ chats }) => {
    const [value, setValue] = useState('');
    const [messageList, setMessageList] = useState([]);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    function add() {
        setMessageList([...messageList, { text: value, author: "me" }]);
        setValue('');
    };

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
            setTimeout(() => {
                setMessageList([...messageList, { text: 'Hello!', author: "bot" }]);
            }, 1500);
        }
    }, [messageList]);

    let { chatId } = useParams();

    return chats[chatId] ? (
        <div className="boxchats">
            <ChatList chats={chats} chatId={chatId} />
            <div className='boxApp'>
                <MessageList messageList={chats[chatId].messages} />
                <div className='waper'>
                    <div className="boxInput">
                        <TextField
                            style={{ margin: '20px' }}
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            value={value}
                            onChange={handleChange}
                            autoFocus
                            fullWidth
                            size="small"
                            placeholder="Type something..."
                        />
                    </div>
                    <Button color="primary" onClick={add} size="medium" variant="contained">

                        &#10148;
                    </Button>
                </div>
            </div>



        </div>
    ) : <NoChats />
}

export default Chats;