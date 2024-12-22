const GROUP = "GROUP";
const PRIVATE = "PRIVATE";

const CHAT_TYPES = {
    GROUP,
    PRIVATE,
};

const CHAT_TYPES_TO_KEY_MAP = {
    [CHAT_TYPES.GROUP]: "group",
    [CHAT_TYPES.PRIVATE]: "private",
};

export { CHAT_TYPES, CHAT_TYPES_TO_KEY_MAP };
