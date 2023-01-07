import React from "react";
import { useLocation } from "react-router-dom";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";
import HorizontalMenuButton from "@components/ui/catalog/HorizontalMenu/HorizontalMenuButton";
import { Menus } from "../../HamburgerMenu/HamburgerMenu";

import services from "@services/index";

const MainMenu = () => {
    const location = useLocation();

    return (
        <HorizontalMenu>
            <HorizontalMenuNav>
                <HorizontalMenuLink
                    to="/"
                    onClick={() => {
                        services.undoHistory.execute("hamburger-navigate", {
                            redoArgs: [Menus.main, "/"],
                            undoArgs: [Menus.main, location.pathname],
                        });
                    }}
                >
                    Discover
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/decks"
                    onClick={() => {
                        services.undoHistory.execute("hamburger-navigate", {
                            redoArgs: [Menus.main, "/decks"],
                            undoArgs: [Menus.main, location.pathname],
                        });
                    }}
                >
                    Decks
                </HorizontalMenuLink>

                <HorizontalMenuButton
                    onClick={() => {
                        services.undoHistory.execute(
                            "hamburger-goto-exercises"
                        );
                    }}
                >
                    Exercises
                </HorizontalMenuButton>
            </HorizontalMenuNav>

            <HorizontalMenuNav>
                <HorizontalMenuLink
                    to="/notifications"
                    onClick={() => {
                        services.undoHistory.execute("hamburger-navigate", {
                            redoArgs: [Menus.main, "/notifications"],
                            undoArgs: [Menus.main, location.pathname],
                        });
                    }}
                >
                    Notifications
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/account"
                    onClick={() => {
                        services.undoHistory.execute("hamburger-navigate", {
                            redoArgs: [Menus.main, "/account"],
                            undoArgs: [Menus.main, location.pathname],
                        });
                    }}
                >
                    Account
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/settings"
                    onClick={() => {
                        services.undoHistory.execute("hamburger-navigate", {
                            redoArgs: [Menus.main, "/settings"],
                            undoArgs: [Menus.main, location.pathname],
                        });
                    }}
                >
                    Settings
                </HorizontalMenuLink>
            </HorizontalMenuNav>
        </HorizontalMenu>
    );
};

export default React.memo(MainMenu);
