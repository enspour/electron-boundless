import { useMemo } from "react";

const useOptions = <T>(initial: T, options: T) => {
    return useMemo(() => Object.assign({}, initial, options), []);
};

export default useOptions;
