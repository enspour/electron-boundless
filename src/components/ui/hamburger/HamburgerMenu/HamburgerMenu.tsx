import React from "react";

import { hamburgerActions, useAppDispatch, useAppSelector } from "@redux";

import Box from "@components/ui/catalog/Box/Box";
import SimpleCarousel from "@components/ui/catalog/SimpleCarousel/SimpleCarousel";

import MainMenu from "@components/ui/hamburger/menus/MainMenu/MainMenu";
import ExercisesMenu from "@components/ui/hamburger/menus/ExercisesMenu/ExercisesMenu";

import useStyleMatcher from "@hooks/css/useStyleMatcher";

import styles from "./HamburgerMenu.module.scss";

export interface HamburgerOptions {
    closeAt: number;
}

const initialOptions: HamburgerOptions = {
    closeAt: 800,
};

const useToggleAtResizingWindow = (options: HamburgerOptions) => {
    const dispatch = useAppDispatch();

    const size = useAppSelector((state) => state.window.size);

    React.useEffect(() => {
        const { width } = size;

        if (width <= options.closeAt) {
            dispatch(hamburgerActions.close());
        } else {
            dispatch(hamburgerActions.open());
        }
    }, [size]);
};

export interface HamburgerLocations {
    main: string;
    exercises: string;
}

const matcher = {
    false: styles.hamburger__hide,
};

interface HamburgerProps {
    options?: HamburgerOptions;
}

const Hamburger = ({ options = initialOptions }: HamburgerProps) => {
    const hamburgerRef = React.useRef();

    const [index, setIndex] = React.useState(0);

    const locations = React.useRef<HamburgerLocations>({
        main: "/",
        exercises: "/exercises/quiz",
    });

    const isOpen = useAppSelector((state) => state.hamburger.isOpen);

    useStyleMatcher(hamburgerRef, isOpen, matcher, [isOpen]);

    useToggleAtResizingWindow(options);

    return (
        <div ref={hamburgerRef} className={styles.hamburger}>
            <Box color="secondary">
                <div className={styles.hamburger__menu}>
                    <SimpleCarousel index={index}>
                        <div className={styles.hamburger__menu__items}>
                            <MainMenu
                                setIndex={setIndex}
                                locations={locations}
                            />
                        </div>

                        <div className={styles.hamburger__menu__items}>
                            <ExercisesMenu
                                setIndex={setIndex}
                                locations={locations}
                            />
                        </div>
                    </SimpleCarousel>
                </div>
            </Box>
        </div>
    );
};

export default React.memo(Hamburger);
