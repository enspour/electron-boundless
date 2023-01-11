import React from "react";

import Hamburger from "@components/ui/hamburger/Hamburger/Hamburger";

import styles from "./Content.module.scss";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className={styles.wrapper}>
            <Hamburger />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default React.memo(Content);
