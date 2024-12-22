import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

// Lodash
import _noop from "lodash/noop";

// Constants
import { EMPTY_ARRAY, EMPTY_STRING } from "../../constants/generic.contants";
import { CHAT_TYPES, CHAT_TYPES_TO_KEY_MAP } from "../../constants/chatTypes";
import { GROUP_IMAGE_ICON } from "./contact.constants";

// Styles
import styles from "./contact.module.css";

const Contact = (props) => {
    const {
        id,
        chatType,
        lastMessage,
        participant,
        groupName,
        handleChatClick,
    } = props;
    const isPrivate = useMemo(
        () => chatType === CHAT_TYPES_TO_KEY_MAP[CHAT_TYPES.PRIVATE],
        [chatType]
    );

    const onClick = useCallback(() => {
        handleChatClick({ id, chatType, participant, groupName });
    }, [id, chatType, participant, groupName, handleChatClick]);

    const renderedBody = useMemo(() => {
        if (isPrivate) {
            return (
                <>
                    <img
                        className={styles.profileImage}
                        src={participant[0].image}
                        alt=""
                    />
                    <div>{participant[0].name}</div>
                    <div className={styles.message}>{lastMessage}</div>
                </>
            );
        }

        return (
            <>
                <img
                    className={styles.profileImage}
                    src={GROUP_IMAGE_ICON}
                    alt=""
                />
                <div>{groupName}</div>
                <div className={styles.message}>{lastMessage}</div>
            </>
        );
    }, [isPrivate, lastMessage, participant, groupName]);

    return (
        <div onClick={onClick} className={styles.container} role="button">
            {renderedBody}
        </div>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    chatType: PropTypes.string.isRequired,
    lastMessage: PropTypes.string,
    groupName: PropTypes.string,
    participant: PropTypes.array,
    lastMessageTimestamp: PropTypes.number,
    handleChatClick: PropTypes.func,
};

Contact.defaultProps = {
    lastMessage: EMPTY_STRING,
    groupName: EMPTY_STRING,
    participant: EMPTY_ARRAY,
    lastMessageTimestamp: 0,
    handleChatClick: _noop,
};

export default Contact;
