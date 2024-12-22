import { useCallback, useEffect, useState } from "react";

// Components
import ChatAreaHeader from "../../atoms/chatAreaHeader/CHatAreaHeader";
import MessageInput from "../messageInput";
import Messages from "../messages/Messages";

// Utils
import { tget } from "../../utils/generic.utils";

import messages from "../../databases/messages";

// Styles
import styles from "./chatArea.module.css";

const ChatArea = ({ selectedChat }) => {
    const { id } = selectedChat;
    const [userMessages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(tget(messages, [id, "messages"], []));
    }, [id]);

    const onMessageSent = useCallback((message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }, []);

    return (
        <div className={styles.container}>
            {selectedChat ? (
                <>
                    <ChatAreaHeader selectedChat={selectedChat} />
                    <Messages messages={userMessages} />
                    <MessageInput selectedChat={selectedChat} onMessageSent={onMessageSent}/>
                </>
            ) : null}
        </div>
    );
};

export default ChatArea;
