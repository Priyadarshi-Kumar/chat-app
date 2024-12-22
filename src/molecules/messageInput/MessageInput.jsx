import { useEffect, useState } from "react";
import styles from "./messageInput.module.css";

const MessageInput = ({ selectedChat, onMessageSent }) => {
    const { id } = selectedChat;

    const [draft, setDraft] = useState("");

    useEffect(() => {
        setDraft("");
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onMessageSent({
            id: Math.random() * 1000,
            content: draft,
            timestamp: Date.now(),
            sender: 0, // default to current user as per usecase
        });
        setDraft("");
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                className={styles.messageInput}
                onChange={(e) => setDraft(e.target.value)}
                value={draft}
                type="text"
                placeholder="Enter Message"
            />
            <input
                className={styles.sendButton}
                type="submit"
                value=">"
                disabled={!draft}
            />
        </form>
    );
};

export default MessageInput;
