import React from "react";
import { useLocation } from "react-router-dom";

import Icon from "@components/ui/catalog/Icon/Icon";
import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";
import { Menus } from "../../HamburgerMenu/HamburgerMenu";

import BackIcon from "@assets/images/hamburger/back.svg";

import services from "@services";

import styles from "./ExercisesMenu.module.scss";

const ExercisesMenu = () => {
    const location = useLocation();

    const back = () => services.undoHistory.execute("hamburger-exercises-back");

    return (
        <div className={styles.exercises__menu}>
            <div className={styles.exercises__menu__back} onClick={back}>
                <Icon
                    icon={BackIcon}
                    width="1.4rem"
                    height="1.4rem"
                    color="tertiary"
                />

                <div>Exercises</div>
            </div>

            <HorizontalMenu>
                <HorizontalMenuNav>
                    <HorizontalMenuLink
                        to="/exercises/quiz"
                        onClick={() => {
                            if (location.pathname !== "/exercises/quiz") {
                                services.undoHistory.push(
                                    "hamburger-navigate",
                                    {
                                        redoArgs: [
                                            Menus.exercises,
                                            "/exercises/quiz",
                                        ],
                                        undoArgs: [
                                            Menus.exercises,
                                            location.pathname,
                                        ],
                                    }
                                );
                            }
                        }}
                    >
                        Quiz
                    </HorizontalMenuLink>

                    <HorizontalMenuLink
                        to="/exercises/word-shake"
                        onClick={() => {
                            if (location.pathname !== "/exercises/word-shake") {
                                services.undoHistory.push(
                                    "hamburger-navigate",
                                    {
                                        redoArgs: [
                                            Menus.exercises,
                                            "/exercises/word-shake",
                                        ],
                                        undoArgs: [
                                            Menus.exercises,
                                            location.pathname,
                                        ],
                                    }
                                );
                            }
                        }}
                    >
                        WordShake
                    </HorizontalMenuLink>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </div>
    );
};

export default React.memo(ExercisesMenu);
