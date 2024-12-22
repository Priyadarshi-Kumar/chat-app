import { useReducer } from "react";

// Components
import ChatArea from "../../molecules/chatArea";
import ChatsList from "../../molecules/chatsList";

// Constants
import { INITIAL_STATE } from "./reducers/messenger.constants";
import REDUCER from "./reducers/messenger.reducers";

// Utils
import { tget } from "../../utils/generic.utils";

// Styles
import styles from "./messenger.module.css";

const Messenger = () => {
    const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);

    const chats = tget(state, "chats", []);
    const selectedChat = tget(state, "selectedChat");

    return (
        <div className={styles.container}>
            <ChatsList chats={chats} onAction={dispatch} />

            {/* Write a property controlled component */}
            {selectedChat ? (
                <>
                    <ChatArea selectedChat={selectedChat} />
                </>
            ) : null}
        </div>
    );
};

export default Messenger;
