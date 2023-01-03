import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Colors,
    Backgrounds,
    HoverColors,
    HoverBackgrounds,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./Switcher.module.scss";

interface SwitcherItemProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
    color: ThemeColor;
}

const SwitcherItem: React.FC<SwitcherItemProps> = ({
    children,
    onClick,
    isActive,
    color = "primary",
}) => {
    const switcherItemRef = React.useRef();

    const isHover = useIsHover(switcherItemRef);

    return (
        <div
            ref={switcherItemRef}
            className={styles.switcher__item}
            style={{
                color: isHover || isActive ? HoverColors[color] : Colors[color],
                backgroundColor:
                    isHover || isActive
                        ? HoverBackgrounds[color]
                        : Backgrounds[color],
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default React.memo(SwitcherItem);
