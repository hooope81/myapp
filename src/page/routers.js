import { List, ListItem, Button } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import Chats from './chats';
import Profile from './profile';
import NoChats from './noChats';
import Gists from './gists';
import RequiredAuth from '../hocs/requiredAuth';
import SignUp from './signUp';
import Login from './login';
import useAuth from '../hook/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { formatTimeStrings } from '../utils/formatTimeStrings';

const Routers = () => {
    const auth = useAuth();
    return (
        <div>
        <div>{formatTimeStrings(['12.02'])}</div>
                  <List sx={{ width: '720px', bgcolor: 'white', display: "flex" }}>
                <ListItem disableGutters >
                    <HomeIcon color="primary" />
                    <Link to='/' className='link_menu'>Home</Link>
                </ListItem>
                <ListItem disableGutters >
                    <MailOutlineIcon color="primary" />
                    <Link to='/chats' className='link_menu'>Chats</Link>
                </ListItem>
                <ListItem disableGutters >
                    <PersonIcon color="primary" />
                    <Link to='/profile' className='link_menu'>Profile</Link>
                </ListItem>
                <ListItem disableGutters >
                    <SettingsIcon color="primary" />
                    <Link to='/gists' className='link_menu'>Gists</Link>
                </ListItem>
                <ListItem disableGutters >
                    <LockIcon color="primary" />
                    <Link to='/signup' className='link_menu'>Sign up</Link>
                </ListItem>
                <ListItem disableGutters >
                    <ExitToAppIcon color="primary" />
                    <Link to='/login' className='link_menu'>Login</Link>
                </ListItem>
                <ListItem disableGutters >
                    <Button onClick={() => auth.signout()} variant="outlined" size="small" style={{ width:'120px', fontSize: '14px', fontWeight: '700' }}>
                    <LogoutIcon color="primary" />
                    Sign out</Button>
                </ListItem>
            </List>
            <div>
                <Routes>

                    <Route exact element={<Home />} />
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/signup' exact element={<SignUp />} />
                    
                    <Route element={<RequiredAuth />}>
                        <Route path='/chats/' exact element={<NoChats />} />
                        <Route path='/chats/:chatId' element={<Chats />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/gists' element={<Gists />} />

                    </Route>
                    <Route path="*" element={<NoChats />} />
                </Routes>
            </div>
        </div>
    );
};
export default Routers;