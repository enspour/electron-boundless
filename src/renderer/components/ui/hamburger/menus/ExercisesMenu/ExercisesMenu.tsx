import React from "react";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import BackHamburger from "../../BackHamburger/BackHamburger";

const ExercisesMenu = () => {
    return (
        <BackHamburger title="Exercises" previousMenu="main">
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
        </BackHamburger>
    );
};

export default React.memo(ExercisesMenu);
