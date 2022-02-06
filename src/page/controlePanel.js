import { useState, useEffect, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../store/messages/actions";
import Profile from "./profile";

const ControlPanel = () => {

    const [value, setValue] = useState('');
    const messages = useSelector(state => state.messages.messageList);
    const profileName = useSelector(state => state.profile.name)
    const dispatch = useDispatch();
    const { chatId } = useParams();


    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);

    const sendMessage = (message, author) => {
        dispatch(addMessage(chatId, {
            text: message,
            author: author
        }));
        setValue('');
    }

    const handleButton = () => {
        sendMessage(value, profileName);
    }


    useEffect(() => {

        let timer;
        const currentChat = messages[chatId];

        if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
            timer = setInterval(() => {
                const currentMessage = 'Hello';
                sendMessage(currentMessage, 'bot')
            }, 1500);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [messages[chatId]]);


        return <div>
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
                <Button color="primary" onClick={handleButton} size="medium" variant="contained">

                    &#10148;
                </Button>
            </div>
        </div>
    };

    export default ControlPanel;