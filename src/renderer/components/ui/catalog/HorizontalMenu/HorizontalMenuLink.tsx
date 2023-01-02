import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./HorizontalMenu.module.scss";

interface NavLinkClassName {
    isActive: boolean;
}

const defineNavLinkClassName = ({ isActive }: NavLinkClassName): string => {
    if (isActive) {
        return `${styles.menu__item} ${styles.menu__item__active}`;
    }

    return `${styles.menu__item}`;
};

interface HorizontalMenuNavProps {
    children: React.ReactNode;
    to: string;
    onClick: () => void;
}

const HorizontalMenuLink = ({
    children,
    to,
    onClick,
}: HorizontalMenuNavProps) => {
    return (
        <NavLink to={to} className={defineNavLinkClassName} onClick={onClick}>
            {children}
        </NavLink>
    );
};

export default React.memo(HorizontalMenuLink);
