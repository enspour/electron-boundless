import React from "react";

import useIsMount from "@hooks/useIsMount";

const useStyleRemover = (
    ref: React.RefObject<HTMLElement>,
    style: string,
    delay: number,
    deps: React.DependencyList
) => {
    const timeout = React.useRef(null);

    const isMount = useIsMount();

    React.useEffect(() => {
        if (ref.current && isMount) {
            if (timeout) {
                clearTimeout(timeout.current);
            }

            ref.current.classList.add(style);

            timeout.current = setTimeout(() => {
                ref.current.classList.remove(style);
            }, delay);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, deps);
};

export default useStyleRemover;
