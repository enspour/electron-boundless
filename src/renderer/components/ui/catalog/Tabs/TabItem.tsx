import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Backgrounds,
    HoverBackgrounds,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./Tabs.module.scss";

interface TabProps {
    name: string;
    children: React.ReactNode;
    onClick?: () => void;

    _isActive?: boolean;
    _color?: ThemeColor;
}

const Tab = ({ name, onClick, _isActive, _color }: TabProps) => {
    const tabRef = React.useRef();

    const isHover = useIsHover(tabRef);

    return (
        <div
            ref={tabRef}
            className={styles.tabs__item}
            style={{
                backgroundColor:
                    isHover || _isActive
                        ? HoverBackgrounds[_color]
                        : Backgrounds[_color],
            }}
            onClick={onClick}
        >
            {name}
        </div>
    );
};

export default React.memo(Tab);
