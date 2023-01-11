import { memo } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import HamburgerControl from "@components/ui/heading/HamburgerControl/HamburgerControl";
import UndoRedoControls from "@components/ui/heading/UndoRedoControls/UndoRedoControls";
import WindowControls from "@components/ui/heading/WindowControls/WindowControls";
import SearchControl from "@components/ui/heading/SearchControl/SearchControl";

import AddIcon from "@assets/images/header/add.svg";

import styles from "./Header.module.scss";

const Header = () => {
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
                <Icon icon={AddIcon} height="1.4rem" width="1.4rem" />

                <WindowControls color="secondary" />
            </div>
        </div>
    );
};

export default memo(Header);
