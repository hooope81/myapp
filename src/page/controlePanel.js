import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDatabase, ref, push, set } from "firebase/database";
import firebase from "../service/firebase";

const ControlPanel = () => {
    const [value, setValue] = useState('');
    const profileName = useSelector(state => state.profile.name);
    const { chatId } = useParams();

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);

    const handleButton = useCallback(() => {
        const message = {
            text: value,
            author: profileName
        }
        const db = getDatabase(firebase);
        const messageRef = ref(db, `/messages/${chatId}`);
        const newMessageRef = push(messageRef);
        set(newMessageRef, message).then((res) => console.log(res));


        setValue('');
    }, [value, chatId]);

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