import React from "react";

const useIsMount = () => {
    const isMountRef = React.useRef(false);

    React.useEffect(() => {
        isMountRef.current = true;
    }, []);

    return isMountRef.current;
};

export default useIsMount;
