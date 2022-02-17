import { Avatar } from "@mui/material";
import { cyan } from '@mui/material/colors';
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getDatabase, get, ref, child} from "firebase/database";
import firebase from "../service/firebase";

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    // const profileName = useSelector(state=>state.profile.name);
    let { chatId } = useParams();
    

    useEffect(()=> {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        get(child(dbRef, `/messages/${chatId}`))
        .then((snapshot)=> {
            if(snapshot.exists() || snapshot.exists()==="" ) {
                const msg = Object.values(snapshot.val());
                setMessages(msg)
            }else {
                console.error('error')
            }
        })
    }, [chatId]);

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
            {messages?.map((message, index) => renderMessage(message, index))}
        </div>
    </div>
};
export default MessageList;


