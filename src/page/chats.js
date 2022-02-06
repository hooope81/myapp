

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

// const [value, setValue] = useState('');
//     const [messageList, setMessageList] = useState([]);
//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }

//     function add() {
//         setMessageList([...messageList, { text: value, author: "me" }]);
//         setValue('');
//     };

//     useEffect(() => {
//         if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
//             setTimeout(() => {
//                 setMessageList([...messageList, { text: 'Hello!', author: "bot" }]);
//             }, 1500);
//         }
//     }, [messageList]);
/* <div className='waper'>
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
</div> */