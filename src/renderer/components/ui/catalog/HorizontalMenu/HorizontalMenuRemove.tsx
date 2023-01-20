import React from "react";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuRemoveProps {
    children: React.ReactNode;
    onClick: () => void;
}

const HorizontalMenuRemove = ({
    children,
    onClick,
}: HorizontalMenuRemoveProps) => {
    return (
        <div className={styles.menu__item__remove} onClick={onClick}>
            {children}
        </div>
    );
};

export default React.memo(HorizontalMenuRemove);
