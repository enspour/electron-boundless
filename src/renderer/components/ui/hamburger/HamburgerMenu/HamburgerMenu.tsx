import React from "react";
import { useNavigate } from "react-router-dom";

import { hamburgerActions, useAppDispatch, useAppSelector } from "@redux";

import Box from "@components/ui/catalog/Box/Box";
import SimpleCarousel from "@components/ui/catalog/SimpleCarousel/SimpleCarousel";

import MainMenu from "@components/ui/hamburger/menus/MainMenu/MainMenu";
import ExercisesMenu from "@components/ui/hamburger/menus/ExercisesMenu/ExercisesMenu";

import useStyleMatcher from "@hooks/css/useStyleMatcher";

import services from "@services/index";

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

export enum Menus {
    main = "main",
    exercises = "exercises",
}

const useHamburger = () => {
    const navigate = useNavigate();

    const [index, setIndex] = React.useState(0);

    const locations = React.useRef<Record<Menus, string>>({
        main: "/",
        exercises: "/exercises/quiz",
    });

    React.useEffect(() => {
        const navigateCommand = {
            name: "hamburger-navigate",

            execute: (location: Menus, to: string) => {
                locations.current[location] = to;
                navigate(to);
            },

            undo: (location: Menus, to: string) => {
                locations.current[location] = to;
                navigate(-1);
            },
        };

        const gotoExercisesCommand = {
            name: "hamburger-goto-exercises",

            execute: () => {
                navigate(locations.current.exercises);
                setIndex(1);
            },

            undo: () => {
                navigate(-1);
                setIndex(0);
            },
        };

        const ExercisesBackCommand = {
            name: "hamburger-exercises-back",

            execute: () => {
                navigate(locations.current.main);
                setIndex((prev) => prev - 1);
            },

            undo: () => {
                navigate(-1);
                setIndex((prev) => prev + 1);
            },
        };

        services.undoHistory.register(navigateCommand);
        services.undoHistory.register(gotoExercisesCommand);
        services.undoHistory.register(ExercisesBackCommand);
    }, []);

    return {
        index,
        setIndex,
        locations,
    };
};

const matcher = {
    false: styles.hamburger__hide,
};

interface HamburgerProps {
    options?: HamburgerOptions;
}

const Hamburger = ({ options = initialOptions }: HamburgerProps) => {
    const hamburgerRef = React.useRef();

    const { index } = useHamburger();

    const isOpen = useAppSelector((state) => state.hamburger.isOpen);

    useStyleMatcher(hamburgerRef, isOpen, matcher, [isOpen]);

    useToggleAtResizingWindow(options);

    return (
        <div ref={hamburgerRef} className={styles.hamburger}>
            <Box color="secondary">
                <div className={styles.hamburger__menu}>
                    <SimpleCarousel index={index}>
                        <div className={styles.hamburger__menu__items}>
                            <MainMenu />
                        </div>

                        <div className={styles.hamburger__menu__items}>
                            <ExercisesMenu />
                        </div>
                    </SimpleCarousel>
                </div>
            </Box>
        </div>
    );
};

export default React.memo(Hamburger);
