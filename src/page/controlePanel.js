import { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageSaga } from "../store/messages/actions";

const ControlPanel = () => {

    const [value, setValue] = useState('');
    const profileName = useSelector(state => state.profile.name);
    const dispatch = useDispatch();
    const { chatId } = useParams();


    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);


    const handleButton = useCallback(() => {
        dispatch(addMessageSaga(chatId, {
            text: value,
            author: profileName
        }));
        setValue('');
    }, [value, chatId, dispatch]);





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