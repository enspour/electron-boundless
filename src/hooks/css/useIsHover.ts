import React from "react";

const useIsHover = (ref: React.RefObject<HTMLElement>) => {
    const [isHover, setIsHover] = React.useState(false);

    const mouseEnterHandler = () => {
        setIsHover(true);
    };

    const mouseLeaveHandler = () => {
        setIsHover(false);
    };

    React.useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("mouseenter", mouseEnterHandler);
            ref.current.addEventListener("mouseleave", mouseLeaveHandler);

            return () => {
                if (ref.current) {
                    ref.current.removeEventListener(
                        "mouseenter",
                        mouseEnterHandler
                    );

                    ref.current.removeEventListener(
                        "mouseleave",
                        mouseLeaveHandler
                    );
                }
            };
        }
    }, []);

    return isHover;
};

export default useIsHover;
