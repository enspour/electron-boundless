import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Icon from "@components/ui/catalog/Icon/Icon";
import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import { HamburgerLocations } from "@components/ui/hamburger/HamburgerMenu/HamburgerMenu";

import BackIcon from "@assets/images/hamburger/back.svg";

import services from "@services";

import styles from "./ExercisesMenu.module.scss";

interface ExercisesMenuProps {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    locations: React.MutableRefObject<HamburgerLocations>;
}

const ExercisesMenu = ({ setIndex, locations }: ExercisesMenuProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const back = () => services.undoHistory.execute("hamburger-menu-back");

    React.useEffect(() => {
        const BackCommand = {
            name: "hamburger-menu-back",
            execute: () => {
                navigate(locations.current.main);
                setIndex((prev) => prev - 1);
            },
            undo: () => {
                navigate(-1);
                setIndex((prev) => prev + 1);
            },
        };

        const QuizCommand = {
            name: "hamburger-menu-quiz",
            execute: () => navigate("/exercises/quiz"),
            undo: () => navigate(-1),
        };

        const WordShakeCommand = {
            name: "hamburger-menu-word-shake",
            execute: () => navigate("/exercises/word-shake"),
            undo: () => navigate(-1),
        };

        services.undoHistory.register(BackCommand);
        services.undoHistory.register(QuizCommand);
        services.undoHistory.register(WordShakeCommand);
    }, []);

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
                                locations.current.exercises = "/exercises/quiz";

                                services.undoHistory.push(
                                    "hamburger-menu-quiz"
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
                                locations.current.exercises =
                                    "/exercises/word-shake";

                                services.undoHistory.push(
                                    "hamburger-menu-word-shake"
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
