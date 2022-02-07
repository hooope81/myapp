import { Link, useParams } from 'react-router-dom';
import { DialogTitle, TextField, List, ListItem, ListItemIcon } from "@mui/material";
import { Button, Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addChat, delChat } from '../store/chats/actions';
import DraftsIcon from '@mui/icons-material/Drafts';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { blue } from '@mui/material/colors';


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
        <div className='wraperChatsList'>

            <div className='addChatBtn'>
                <Button onClick={handleOpen} variant="contained">Add a chat</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle sx={{
                        fontSize: '24px', marginBottom: '-25px'
                    }}>Please enter the chat name
                    </DialogTitle>
                    <div className='chatNameBox'>
                        <TextField value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName} variant="contained" sx={{
                            marginTop: '15px'
                        }}>
                            Add a chat</Button>
                    </div>
                </Dialog>
            </div>

            {chats.map((chat, index) => (
                <div key={index} className='chatListBox'>
                    <List>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <DraftsIcon sx={{ color: blue[500] }}/>
                            </ListItemIcon>
                            
                                <Link to={`/chats/${chat.id}`}>
                                    <div style={{ color: chat.id === chatId ? 'black' : 'grey', maxWidth:'100px',wordWrap: 'break-word'}} >
                                        {chat.name}
                                    </div>

                                </Link>

                                <IconButton onClick={() => onDelChat(index)}>
                                    <ClearOutlinedIcon sx={{ color: blue[500] }} />
                                </IconButton>
                            
                        </ListItem>
                    </List>
                </div>
            ))
            }
        </div>
    )

}

export default ChatList;