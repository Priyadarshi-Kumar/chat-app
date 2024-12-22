import chats from "../../../databases/chats";
import contacts from "../../../databases/contacts";

const INITIAL_STATE = {
    chats,
    contacts,
    selectedChat: null,
};

const ACTION_TYPES = {
    SELECT_CHAT: "SELECT_CHAT",
}

export { INITIAL_STATE, ACTION_TYPES };
