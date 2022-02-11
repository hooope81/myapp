import { Avatar } from "@mui/material";
import { cyan } from '@mui/material/colors';
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const MessageList = () => {

    // const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    let { chatId } = useParams();
    const getMessageById = messages[chatId];



    const renderMessage = useCallback((message, index) => {

        let newName = message.author[0];

        return (
            <div className={message.author === "bot" ? "bot" : "me"} key={index}>
                <Avatar sx={{ bgcolor: cyan[500] }}>{message.author === "bot" ? "bot" : newName}
                </Avatar>
                <p className='mess'>{message.text} </p>

            </div>
        )
    }, []);

    return <div>

        <div className='App'>
            {getMessageById?.map((message, index) => renderMessage(message, index))}
        </div>
    </div>

};

export default MessageList;


