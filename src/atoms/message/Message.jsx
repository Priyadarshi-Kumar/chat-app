import { useMemo } from "react";

// Lodash
import filter from "lodash/filter";
import head from "lodash/head";

// Helpers
import { getTimeLael } from "./message.helpers";

// COnstants
import { EMPTY_OBJECT } from "../../constants/generic.contants";

import contacts from "../../databases/contacts";

import styles from "./message.module.css";

const Message = (props) => {
    const { content, sender, timestamp } = props;

    const senderDetails = useMemo(() => {
        return head(filter(contacts, { id: sender })) || EMPTY_OBJECT;
    }, [sender]);
    
    const styleObj =
        sender === 0
            ? {
                  display: "flex",
                  justifySelf: "flex-end",
                  backgroundColor: "#53d769",
                  width: "max-content",
              }
            : {
                  display: "flex",
                  justifySelf: "start",
                  backgroundColor: "#147efb",
                  width: "max-content",
              };

    return (
        <div className={styles.container} style={styleObj}>
            <img className={styles.profileImage} src={senderDetails.image} alt=""/>
            {content}{" "}
            <span className={styles.time}>{getTimeLael(timestamp)}</span>
        </div>
    );
};

export default Message;
