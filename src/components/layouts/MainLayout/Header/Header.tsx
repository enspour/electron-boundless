import React from "react";

import HamburgerControls from "@components/ui/heading/HamburgerControls/HamburgerControls";
import WindowControls from "@components/ui/heading/WindowControls/WindowControls";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__hamburger}>
                <HamburgerControls />
            </div>

            <div className={styles.header__title}>Boundless</div>

            <div className={styles.header__controls}>
                <WindowControls color="secondary" />
            </div>
        </div>
    );
};

export default React.memo(Header);
