
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import Chats from './chats';
import Profile from './profile';
import NoChats from './noChats';
import { useState } from 'react';


const initialChats = {
    id1: {
        name: 'Chat1',
        messages: [{
            text: 'FirstMessage',
            author: 'me'
        }]
    },
    id2: {
        name: "Chat2",
        messages: [
            {
                text: "Hi!",
                author: "me"
            },
            {
                text: "Hello!",
                author: "bot"
            }]
    }
}

const Routers = () => {
    const [chatsList, setChatsList] = useState(initialChats);
    return (
        <div>
            <List sx={{ width: '720px', bgcolor: 'white', display: "flex" }}>
                <ListItem disableGutters sx={{ width: '33%'}}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/'>Home</Link>
                    <ListItemText />
                </ListItem>

                <ListItem disableGutters sx={{ width: '33%'}}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/chats'>Chats</Link>
                    <ListItemText />
                </ListItem>

                <ListItem disableGutters sx={{ width: '33%'}}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/profile'>Profile</Link>
                    <ListItemText />
                </ListItem>

            </List>
            <div>

                <Routes>
                    <Route path='/' exact element={<Home />} />

                    <Route path='/chats/:chatId' element={<Chats chats={chatsList} />} />


                    <Route path='/profile' element={<Profile />} />
                    <Route path="*" element={<NoChats chats={chatsList} />} />
                </Routes>
            </div>
        </div>
    );
};


export default Routers;