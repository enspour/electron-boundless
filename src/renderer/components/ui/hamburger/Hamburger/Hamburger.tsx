import { useRef, memo } from "react";

import { useAppSelector } from "@redux";

import Box from "@components/ui/catalog/Box/Box";
import HamburgerMenu from "./HamburgerMenu";

import useStyleMatcher from "@hooks/css/useStyleMatcher";
import useOptions from "@hooks/useOptions";
import useToggleAtResizingWindow from "./useToggleAtResizingWindow";

import styles from "./Hamburger.module.scss";

export interface HamburgerOptions {
    closeAt?: number;
    transition?: number;
}

const initialOptions: HamburgerOptions = {
    closeAt: 800,
    transition: 400,
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

    useToggleAtResizingWindow(combinedOptions.closeAt);

    return (
        <div ref={hamburgerRef} className={styles.hamburger}>
            <Box color="secondary">
                <HamburgerMenu />
            </Box>
        </div>
    );
};

export default memo(Hamburger);
