import { get, isNil } from "lodash";


export const tget = (object, path, defaultValue) => {
    const result = get(object, path, defaultValue);
    return isNil(result) ? defaultValue : result;
};
