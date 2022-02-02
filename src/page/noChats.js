import { useParams } from "react-router-dom";
import ChatList from "./chatList";



const NoChats = ({chats}) => {
    const {chatId} =useParams();
    return (
        <div>
        <ChatList chats={chats} chatId={chatId} />
        </div>
    )
}

export default NoChats;