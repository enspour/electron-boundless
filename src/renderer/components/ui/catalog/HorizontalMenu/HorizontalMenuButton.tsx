import React from "react";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const HorizontalMenuButton = ({
    children,
    onClick,
}: HorizontalMenuButtonProps) => {
    return (
        <div className={styles.menu__item} onClick={onClick}>
            {children}
        </div>
    );
};

export default React.memo(HorizontalMenuButton);
