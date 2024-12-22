import { useMemo } from "react";

import { CHAT_TYPES, CHAT_TYPES_TO_KEY_MAP } from "../../constants/chatTypes";
import { EMPTY_OBJECT } from "../../constants/generic.contants";
import { GROUP_IMAGE_ICON } from "../contact/contact.constants";

import styles from "./chatAreaHeader.module.css";

const ChatAreaHeader = ({ selectedChat = EMPTY_OBJECT }) => {
    const { id, chatType, groupName, participant } = selectedChat;

    const isPrivate = useMemo(
        () => chatType === CHAT_TYPES_TO_KEY_MAP[CHAT_TYPES.PRIVATE],
        [chatType]
    );

    return (
        <div className={styles.container}>
            {isPrivate ? (
                <>
                    <img
                        className={styles.profileImage}
                        src={participant[0].image}
                        alt=""
                    />
                    <div>{participant[0].name}</div>
                    <div className={styles.state}>Last Seen: Today 10:00 PM</div>
                </>
            ) : (
                <>
                    <img
                        className={styles.profileImage}
                        src={GROUP_IMAGE_ICON}
                        alt=""
                    />
                    <div>{groupName}</div>
                    <div className={styles.state}>3 Online</div>
                </>
            )}
        </div>
    );
};

export default ChatAreaHeader;
