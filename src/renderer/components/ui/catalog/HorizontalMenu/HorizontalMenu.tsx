import React from "react";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuProps {
    children: React.ReactNode;
}

const HorizontalMenu = ({ children }: HorizontalMenuProps) => {
    return <div className={styles.menu}>{children}</div>;
};

export default React.memo(HorizontalMenu);
