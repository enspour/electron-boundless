import { FC, memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./HorizontalMenu.module.scss";

const defineNavLinkClassName = (isActive: boolean): string => {
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

const HorizontalMenuLink: FC<HorizontalMenuNavProps> = ({
    children,
    to,
    onClick,
}) => {
    const location = useLocation();

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (location.pathname !== to) {
            onClick();
        }
    };

    useEffect(() => {
        if (location.pathname === to) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [location]);

    return (
        <div className={defineNavLinkClassName(isActive)} onClick={handleClick}>
            {children}
        </div>
    );
};

export default memo(HorizontalMenuLink);
