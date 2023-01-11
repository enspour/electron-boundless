import { useEffect, memo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import MainMenu from "@components/ui/hamburger/menus/MainMenu/MainMenu";
import DeckMenu from "@components/ui/hamburger/menus/DeckMenu/DeckMenu";
import ExercisesMenu from "@components/ui/hamburger/menus/ExercisesMenu/ExercisesMenu";

import AdvancedMenu from "@components/ui/catalog/AdvancedMenu/AdvancedMenu";

import useAdvancedMenu from "@components/ui/catalog/AdvancedMenu/useAdvancedMenu";

import { HamburgerMenuName } from "@services/Hamburger.service";

import services from "@services/index";

import styles from "./Hamburger.module.scss";

const Menus: Record<HamburgerMenuName, ReactNode> = {
    main: <MainMenu />,
    deck: <DeckMenu />,
    exercises: <ExercisesMenu />,
};

const HamburgerMenu = () => {
    const navigate = useNavigate();

    const { index, menusRef, menus, openPrevMenu, openNextMenu } =
        useAdvancedMenu({
            initialMenu: <MainMenu />,
            transition: 300,
        });

    useEffect(() => {
        services.undoHistory.register({
            name: "hamburger-navigate",

            execute: (to: string) => {
                if (to) {
                    navigate(to);
                } else {
                    navigate(1);
                }
            },

            undo: () => navigate(-1),
        });

        services.undoHistory.register({
            name: "hamburger-next-menu",

            execute: (name: HamburgerMenuName, to: string) => {
                openNextMenu(Menus[name]);
                navigate(to);
            },

            undo: (name: HamburgerMenuName) => {
                openPrevMenu(Menus[name]);
                navigate(-1);
            },
        });

        services.undoHistory.register({
            name: "hamburger-prev-menu",

            execute: (name: HamburgerMenuName, to: string) => {
                openPrevMenu(Menus[name]);
                navigate(to);
            },

            undo: (name: HamburgerMenuName) => {
                openNextMenu(Menus[name]);
                navigate(-1);
            },
        });
    }, []);

    return (
        <div className={styles.hamburger__menu}>
            <AdvancedMenu index={index} menusRef={menusRef} menus={menus} />
        </div>
    );
};

export default memo(HamburgerMenu);
