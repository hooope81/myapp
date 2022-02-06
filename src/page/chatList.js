import { Link, useParams } from 'react-router-dom';
import { DialogTitle, TextField } from "@mui/material";
import { Button, Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {addChat} from '../store/chats/actions';

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
        dispatch (addChat(newChatName));
        setNewChatName('');
        handleClose();
    }

    return (
        <div>
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Добавить чат</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Пожалуйста, введите имя чата
                    </DialogTitle>
                    <div className='chatNameBox'>
                        <TextField value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName}>Добавить чат</Button>
                    </div>
                </Dialog>
            </div>
        </div>
    )

}


//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

//     {Object.keys(chats).map((chat, i)=> (

//         <ListItem >

//         <Avatar sx={{ bgcolor: cyan[500] }}>{i+1}</Avatar>
//         <Link to={`/chats/${chat}`} key={i} style={{color: chat === chatId ? 'grey' : 'black'}}>
//     {chats[chat].name}
//     </Link>

//     </ListItem>
//     ))}
//     </List>
// }

export default ChatList;