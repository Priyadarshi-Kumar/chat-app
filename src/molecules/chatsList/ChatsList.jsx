import { useCallback } from "react";
import PropTypes from "prop-types";

// Lodash
import noop from "lodash/noop";

// Components
import Contact from "../../atoms/contact/Contact";

// Constants
import { EMPTY_ARRAY } from "../../constants/generic.contants";
import { ACTION_TYPES } from "../../pages/messenger/reducers/messenger.constants";

// Styles
import styles from "./chatsList.module.css";

const ChatsList = (props) => {
    const { chats, onAction } = props;

    const handleChatClick = useCallback(
        (chat) => {
            onAction({
                type: ACTION_TYPES.SELECT_CHAT,
                payload: chat,
            });
        },
        [onAction]
    );

    return (
        <div className={styles.container}>
            {chats.map((chat) => (
                <Contact
                    handleChatClick={handleChatClick}
                    {...chat}
                    key={chat.id}
                />
            ))}
        </div>
    );
};

ChatsList.propTypes = {
    chats: PropTypes.array,
    onAction: PropTypes.func,
};

ChatsList.defaultProps = {
    chats: EMPTY_ARRAY,
    onAction: noop,
};

export default ChatsList;
