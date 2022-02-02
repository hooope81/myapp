import {Link} from 'react-router-dom';
import { List, ListItem, Avatar} from "@mui/material";
import { cyan } from '@mui/material/colors';

const ChatList = ({ chats, chatId}) => {
    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

    {Object.keys(chats).map((chat, i)=> (

        <ListItem >

        <Avatar sx={{ bgcolor: cyan[500] }}>{i+1}</Avatar>
        <Link to={`/chats/${chat}`} key={i} style={{color: chat === chatId ? 'grey' : 'black'}}>
    {chats[chat].name}
    </Link>

    </ListItem>
    ))}
    </List>
}

export default ChatList;