import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DialogTitle, TextField, List, ListItem, ListItemIcon, Divider } from "@mui/material";
import { Button, Dialog } from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import IconButton from '@mui/material/IconButton';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addChatWithFB, deleteChatWithFB, initTrackerWhithFB } from '../store/middleware';

const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true);
    }

    const handleClose = () => {
        setVisible(false);
    }

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChatWithFB(newChatName));
        setNewChatName('');
        handleClose();
    };

    const onDelChat = (id) => {
        dispatch(deleteChatWithFB(id));
    };

    useEffect(() => {
        dispatch(initTrackerWhithFB())
    }, []);


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
                        <ListItem disablePadding sx={{ justifyContent: 'space-between' }}>
                            <div className='chatsListWraper'>
                                <ListItemIcon>
                                    <DraftsIcon sx={{ color: blue[500] }} />
                                </ListItemIcon>
                                <Link to={`/chats/${chat.id}`}>
                                    <div style={{ color: chat.id === chatId ? 'black' : 'grey', maxWidth: '100px', wordWrap: 'break-word' }} >
                                        {chat.name}
                                    </div>
                                </Link>
                            </div>
                            <IconButton onClick={() => onDelChat(chat.id)}>
                                <ClearOutlinedIcon sx={{ color: blue[500] }} />
                            </IconButton>
                        </ListItem>
                        <Divider  />
                    </List>
                </div>
            ))
            }
        </div>
    )
}
export default ChatList;