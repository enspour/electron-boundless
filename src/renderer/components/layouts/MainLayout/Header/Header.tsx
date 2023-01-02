import React from "react";

import HamburgerControl from "@components/ui/heading/HamburgerControl/HamburgerControl";
import UndoRedoControls from "@components/ui/heading/UndoRedoControls/UndoRedoControls";
import WindowControls from "@components/ui/heading/WindowControls/WindowControls";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__controls}>
                <HamburgerControl />
                <UndoRedoControls />
            </div>

            <div className={styles.header__title}>Boundless</div>

            <div className={styles.header__window__controls}>
                <WindowControls color="secondary" />
            </div>
        </div>
    );
};

export default React.memo(Header);
