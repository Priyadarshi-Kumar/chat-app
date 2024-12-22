import { useEffect } from "react";

/**
 * A custom hook that will scroll to the last item in the given reference.
 * @param {array} messages - The array of messages
 * @param {object} ref - The reference to the element you want to scroll
 * @returns {function} - The hook.
 */

const useScrollToLast = (messages, ref) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages, ref]);
};

export default useScrollToLast;