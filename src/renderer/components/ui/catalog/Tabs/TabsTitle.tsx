import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Colors,
    Backgrounds,
    HoverColors,
    HoverBackgrounds,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./Tabs.module.scss";

interface TabsTitleProps {
    children: string;
    onClick: () => void;
    isActive: boolean;
    color: ThemeColor;
}

const TabsTitle = ({ children, onClick, isActive, color }: TabsTitleProps) => {
    const tabRef = React.useRef();

    const isHover = useIsHover(tabRef);

    return (
        <div
            ref={tabRef}
            className={styles.tabs__title}
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

export default React.memo(TabsTitle);
