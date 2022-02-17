export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const addChat = (name) => ({
    type: ADD_CHAT,
    name
});

export const DEL_CHAT = 'CHATS::DEL_CHAT';
export const delChat = (index) => ({
    type: DEL_CHAT,
    index
});

export const CHATS_UPDATE = 'CHATS::CHATS_UPDATE';
export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
  });
