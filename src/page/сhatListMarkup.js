// import { Link } from 'react-router-dom';
// import { DialogTitle, TextField, List, ListItem, ListItemIcon } from "@mui/material";
// import { Button, Dialog } from '@mui/material';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import IconButton from '@mui/material/IconButton';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import { blue } from '@mui/material/colors';

// const ChatListMarkup = ({ handleOpen, visible, handleClose, newChatName, handleChange, onAddChat, chats, chatId, onDelChat }) => (
//     <div className='wraperChatsList'>
//         <div className='addChatBtn'>
//             <Button onClick={handleOpen} variant="contained">Add a chat</Button>
//             <Dialog open={visible} onClose={handleClose}>
//                 <DialogTitle sx={{
//                     fontSize: '24px', marginBottom: '-25px'
//                 }}>Please enter the chat name
//                 </DialogTitle>
//                 <div className='chatNameBox'>
//                     <TextField value={newChatName} onChange={handleChange} />
//                     <Button onClick={onAddChat} disabled={!newChatName} variant="contained" sx={{
//                         marginTop: '15px'
//                     }}>
//                         Add a chat</Button>
//                 </div>
//             </Dialog>
//         </div>

//         {chats.map((chat, index) => (
//             <div key={index} className='chatListBox'>
//                 <List>
//                     <ListItem disablePadding>
//                         <ListItemIcon>
//                             <DraftsIcon sx={{ color: blue[500] }} />
//                         </ListItemIcon>
//                         <Link to={`/chats/${chat.id}`}>
//                             <div style={{ color: chat.id === chatId ? 'black' : 'grey', maxWidth: '100px', wordWrap: 'break-word' }} >
//                                 {chat.name}
//                             </div>
//                         </Link>
//                         <IconButton onClick={() => onDelChat(chat.id)}>
//                             <ClearOutlinedIcon sx={{ color: blue[500] }} />
//                         </IconButton>
//                     </ListItem>
//                 </List>
//             </div>
//         ))
//         }
//     </div>
// );
// export default ChatListMarkup;