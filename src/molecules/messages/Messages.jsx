import { useRef } from "react";

// Constants
import { EMPTY_ARRAY } from "../../constants/generic.contants";

// Components
import Message from "../../atoms/message";

// Custom hooks
import useScrollToLast from "../../customHooks/useScrollToLast";

// Styles
import styles from './messages.module.css';


const Messages = ({ messages = EMPTY_ARRAY }) => {
    const messagesRef = useRef(null);

    useScrollToLast(messages, messagesRef)
    return (
        <div className={styles.container} ref={messagesRef}>
            {messages.map((message) => {
                return <Message key={message.id} {...message} />;
            })}
        </div>
    );
};

export default Messages;
