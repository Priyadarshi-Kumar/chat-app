import { ACTION_TYPES } from "./messenger.constants";

import noop from "lodash/noop";

const selectChat = (state, action) => ({
    ...state,
    selectedChat: action.payload,
});

const ACTION_HANDLERS = {
    [ACTION_TYPES.SELECT_CHAT]: selectChat,
};

const REDUCER = (state, action) => {
    const { type } = action;

    return ACTION_HANDLERS[type](state, action) || noop;
};

export default REDUCER;
