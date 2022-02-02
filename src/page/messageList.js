import { Avatar} from "@mui/material";
import { cyan } from '@mui/material/colors';






const MessageList = ({ messageList }) => {
    return <div>
       
            <div className='App'>
                {messageList.map((message, index) => (
                    <div className={message.author === "me" ? "me" : "bot"} key={index}>
                        <Avatar sx={{ bgcolor: cyan[500] }}>{message.author}
                        </Avatar>
                        <p className='mess'>{message.text} </p>

                    </div>
                ))}
            </div>
        </div>

};

export default MessageList;


