import { FC, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import services from "@services";

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

interface HorizontalMenuLinkProps {
    children: React.ReactNode;
    to: string;
    onClick?: () => void;
}

const HorizontalMenuLink: FC<HorizontalMenuLinkProps> = ({
    children,
    to,
    onClick,
}) => {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== to) {
            services.hamburger.handleNavigate(to);
            onClick?.call({});
        }
    };

    return (
        <NavLink
            to={to}
            className={defineNavLinkClassName}
            onClick={handleClick}
        >
            {children}
        </NavLink>
    );
};

export default memo(HorizontalMenuLink);
