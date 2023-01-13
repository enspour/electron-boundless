import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import HamburgerControl from "@components/ui/heading/HamburgerControl/HamburgerControl";
import UndoRedoControls from "@components/ui/heading/UndoRedoControls/UndoRedoControls";
import WindowControls from "@components/ui/heading/WindowControls/WindowControls";
import SearchControl from "@components/ui/heading/SearchControl/SearchControl";

import AddIcon from "@assets/images/header/add.svg";

import services from "@services";

import styles from "./Header.module.scss";

const Header = () => {
    const create = async () => {
        const deck = await services.decks.createOne({
            name: "Unnamed",
            description: "",
            location: "local",
            level: "Beginners",
            createdAt: Date.now(),
        });

        services.hamburger.goNextMenu("deck", `/decks/browse/${deck.id}`);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__left}>
                <HamburgerControl />
                <UndoRedoControls />
            </div>

            <div className={styles.header__middle}>
                <SearchControl />
            </div>

            <div className={styles.header__right}>
                <div className={styles.header__control}>
                    <Icon
                        icon={AddIcon}
                        height="1.4rem"
                        width="1.4rem"
                        onClick={create}
                    />
                </div>

                <WindowControls color="secondary" />
            </div>
        </div>
    );
};

export default memo(Header);
