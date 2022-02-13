
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import Chats from './chats';
import Profile from './profile';
import NoChats from './noChats';
import Gists from './gists';



const Routers = () => {

    return (
        <div>
            <List sx={{ width: '720px', bgcolor: 'white', display: "flex" }}>
                <ListItem disableGutters sx={{ width: '33%' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/'>Home</Link>
                    <ListItemText />
                </ListItem>

                <ListItem disableGutters sx={{ width: '33%' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/chats'>Chats</Link>
                    <ListItemText />
                </ListItem>

                <ListItem disableGutters sx={{ width: '33%' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/profile'>Profile</Link>
                    <ListItemText />
                </ListItem>

                <ListItem disableGutters sx={{ width: '33%' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} />
                    </ListItemAvatar>
                    <Link to='/gists'>Gists</Link>
                    <ListItemText />
                </ListItem>

            </List>
            <div>

                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/chats/:chatId' element={<Chats />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/gists' exact element={<Gists />} />
                    <Route path="*" element={<NoChats />} />
                </Routes>
            </div>
        </div>
    );
};


export default Routers;