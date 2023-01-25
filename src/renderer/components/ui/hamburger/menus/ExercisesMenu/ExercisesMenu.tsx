import React from "react";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import HamburgerBackButton from "../../HamburgerBackButton/HamburgerBackButton";
import HamburgerMenuLayout from "../../HamburgerMenuLayout/HamburgerMenuLayout";

const ExercisesMenu = () => {
    return (
        <HamburgerMenuLayout>
            <HamburgerBackButton title="Exercises" name="main" />

            <HorizontalMenu>
                <HorizontalMenuNav>
                    <HorizontalMenuLink to="/exercises/cards">
                        Cards
                    </HorizontalMenuLink>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </HamburgerMenuLayout>
    );
};

export default React.memo(ExercisesMenu);
