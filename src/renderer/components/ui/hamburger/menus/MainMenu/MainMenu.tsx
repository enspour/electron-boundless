import React from "react";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";
import HorizontalMenuButton from "@components/ui/catalog/HorizontalMenu/HorizontalMenuButton";

import services from "@services/index";
import HamburgerMenuLayout from "../../HamburgerMenuLayout/HamburgerMenuLayout";

const MainMenu = () => {
    return (
        <HamburgerMenuLayout>
            <HorizontalMenu>
                <HorizontalMenuNav>
                    <HorizontalMenuLink to="/">Discover</HorizontalMenuLink>

                    <HorizontalMenuLink to="/decks">Decks</HorizontalMenuLink>

                    <HorizontalMenuButton
                        onClick={() => {
                            services.hamburger.openNextMenu("exercises");
                        }}
                    >
                        Exercises
                    </HorizontalMenuButton>
                </HorizontalMenuNav>

                <HorizontalMenuNav>
                    <HorizontalMenuLink to="/notifications">
                        Notifications
                    </HorizontalMenuLink>

                    <HorizontalMenuLink to="/account">
                        Account
                    </HorizontalMenuLink>

                    <HorizontalMenuLink to="/settings">
                        Settings
                    </HorizontalMenuLink>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </HamburgerMenuLayout>
    );
};

export default React.memo(MainMenu);
