import { useEffect, useRef, memo } from "react";

import { hamburgerActions, useAppDispatch, useAppSelector } from "@redux";

import Box from "@components/ui/catalog/Box/Box";
import HamburgerMenu from "./HamburgerMenu";

import useStyleMatcher from "@hooks/css/useStyleMatcher";
import useOptions from "@hooks/useOptions";

import styles from "./Hamburger.module.scss";

export interface HamburgerOptions {
    closeAt?: number;
    transition?: number;
}

const initialOptions: HamburgerOptions = {
    closeAt: 800,
    transition: 400,
};

const useToggleAtResizingWindow = (options: HamburgerOptions) => {
    const dispatch = useAppDispatch();

    const size = useAppSelector((state) => state.window.size);

    useEffect(() => {
        const { width } = size;

        if (width <= options.closeAt) {
            dispatch(hamburgerActions.close());
        } else {
            dispatch(hamburgerActions.open());
        }
    }, [size]);
};

const matcher = {
    false: styles.hamburger__hide,
};

interface HamburgerProps {
    options?: HamburgerOptions;
}

const Hamburger = ({ options }: HamburgerProps) => {
    const combinedOptions = useOptions(initialOptions, options);

    const hamburgerRef = useRef();

    const isOpen = useAppSelector((state) => state.hamburger.isOpen);

    useStyleMatcher(hamburgerRef, isOpen, matcher, [isOpen]);

    useToggleAtResizingWindow(combinedOptions);

    return (
        <div ref={hamburgerRef} className={styles.hamburger}>
            <Box color="secondary">
                <HamburgerMenu />
            </Box>
        </div>
    );
};

export default memo(Hamburger);
