import React from "react";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuNavProps {
    children: React.ReactNode;
}

const HorizontalMenuNav = ({ children }: HorizontalMenuNavProps) => {
    return <nav className={styles.menu__items}>{children}</nav>;
};

export default React.memo(HorizontalMenuNav);
