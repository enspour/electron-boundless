import React from "react";

import services from "@services";

const useServices = () => {
    React.useLayoutEffect(() => {
        return services.initialize();
    }, []);
};

export default useServices;
