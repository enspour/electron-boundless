import React from "react";

const useStyleMatcher = (
    ref: React.RefObject<HTMLElement>,
    currentKey: string | number | boolean,
    matcher: Record<string, string>,
    deps: React.DependencyList
) => {
    React.useEffect(() => {
        if (ref.current) {
            Object.values<string>(matcher).forEach((value) => {
                if (ref.current.classList.contains(value)) {
                    ref.current.classList.remove(value);
                }
            });

            Object.keys(matcher).forEach((key) => {
                if (String(currentKey) === key) {
                    ref.current.classList.add(matcher[key]);
                }
            });
        }
    }, deps);
};

export default useStyleMatcher;
