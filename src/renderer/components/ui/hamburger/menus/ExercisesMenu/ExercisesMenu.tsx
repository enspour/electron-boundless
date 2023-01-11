import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import BackIcon from "@assets/images/hamburger/back.svg";

import services from "@services";

import styles from "./ExercisesMenu.module.scss";

const ExercisesMenu = () => {
    const back = () => services.hamburger.goBackMenu("main");

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
                    <HorizontalMenuLink to="/exercises/quiz">
                        Quiz
                    </HorizontalMenuLink>

                    <HorizontalMenuLink to="/exercises/word-shake">
                        WordShake
                    </HorizontalMenuLink>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </div>
    );
};

export default React.memo(ExercisesMenu);
