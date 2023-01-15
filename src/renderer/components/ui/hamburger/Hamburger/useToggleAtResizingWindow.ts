import { useEffect } from "react";

import { hamburgerActions, useAppDispatch, useAppSelector } from "@redux";

const useToggleAtResizingWindow = (closeAt: number) => {
    const dispatch = useAppDispatch();

    const size = useAppSelector((state) => state.window.size);

    useEffect(() => {
        const { width } = size;

        if (width <= closeAt) {
            dispatch(hamburgerActions.close());
        } else {
            dispatch(hamburgerActions.open());
        }
    }, [size]);
};

export default useToggleAtResizingWindow;
