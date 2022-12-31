import React from "react";

import HamburgerMenu from "@components/ui/hamburger/HamburgerMenu/HamburgerMenu";

import styles from "./Content.module.scss";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className={styles.wrapper}>
            <HamburgerMenu />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default React.memo(Content);
