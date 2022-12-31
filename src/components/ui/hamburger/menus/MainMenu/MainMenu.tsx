import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";
import HorizontalMenuButton from "@components/ui/catalog/HorizontalMenu/HorizontalMenuButton";

import { HamburgerLocations } from "../../Hamburger";

import services from "@services/index";

interface MainMenuProps {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    locations: React.MutableRefObject<HamburgerLocations>;
}

const MainMenu = ({ setIndex, locations }: MainMenuProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const DiscoverCommand = {
            name: "hamburger-menu-discover",
            execute: () => navigate("/"),
            undo: () => navigate(-1),
        };

        const DecksCommand = {
            name: "hamburger-menu-decks",
            execute: () => navigate("/decks"),
            undo: () => navigate(-1),
        };

        const ExercisesCommand = {
            name: "hamburger-menu-exercises",
            execute: () => {
                navigate("/exercises/quiz");
                setIndex(1);
            },
            undo: () => {
                navigate(-1);
                setIndex(0);
            },
        };

        const NotificationsCommand = {
            name: "hamburger-menu-notifications",
            execute: () => navigate("/notifications"),
            undo: () => navigate(-1),
        };

        const AccountCommand = {
            name: "hamburger-menu-account",
            execute: () => navigate("/account"),
            undo: () => navigate(-1),
        };

        const SettingsCommand = {
            name: "hamburger-menu-settings",
            execute: () => navigate("/settings"),
            undo: () => navigate(-1),
        };

        services.undoHistory.register(DiscoverCommand);
        services.undoHistory.register(DecksCommand);
        services.undoHistory.register(ExercisesCommand);
        services.undoHistory.register(NotificationsCommand);
        services.undoHistory.register(AccountCommand);
        services.undoHistory.register(SettingsCommand);
    }, []);

    return (
        <HorizontalMenu>
            <HorizontalMenuNav>
                <HorizontalMenuLink
                    to="/"
                    onClick={() => {
                        if (location.pathname !== "/") {
                            locations.current.main = "/";

                            services.undoHistory.push(
                                "hamburger-menu-discover"
                            );
                        }
                    }}
                >
                    Discover
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/decks"
                    onClick={() => {
                        if (location.pathname !== "/decks") {
                            locations.current.main = "/decks";

                            services.undoHistory.push("hamburger-menu-decks");
                        }
                    }}
                >
                    Decks
                </HorizontalMenuLink>

                <HorizontalMenuButton
                    onClick={() => {
                        services.undoHistory.execute(
                            "hamburger-menu-exercises"
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
                        if (location.pathname !== "/notifications") {
                            locations.current.main = "/notifications";

                            services.undoHistory.push(
                                "hamburger-menu-notifications"
                            );
                        }
                    }}
                >
                    Notifications
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/account"
                    onClick={() => {
                        if (location.pathname !== "/account") {
                            locations.current.main = "/account";

                            services.undoHistory.push("hamburger-menu-account");
                        }
                    }}
                >
                    Account
                </HorizontalMenuLink>

                <HorizontalMenuLink
                    to="/settings"
                    onClick={() => {
                        if (location.pathname !== "/settings") {
                            locations.current.main = "/settings";

                            services.undoHistory.push(
                                "hamburger-menu-settings"
                            );
                        }
                    }}
                >
                    Settings
                </HorizontalMenuLink>
            </HorizontalMenuNav>
        </HorizontalMenu>
    );
};

export default React.memo(MainMenu);
