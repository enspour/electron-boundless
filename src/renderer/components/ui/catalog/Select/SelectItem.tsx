import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Colors,
    Backgrounds,
    HoverColors,
    HoverBackgrounds,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./Select.module.scss";

export interface SelectItemProps {
    children: React.ReactNode;
    onClick: () => void;
    color: ThemeColor;
}

const SelectItem = ({
    children,
    onClick,
    color = "primary",
}: SelectItemProps) => {
    const itemRef = React.useRef();

    const isHover = useIsHover(itemRef);

    return (
        <div
            ref={itemRef}
            className={styles.select__item}
            style={{
                color: isHover ? HoverColors[color] : Colors[color],
                backgroundColor: isHover
                    ? HoverBackgrounds[color]
                    : Backgrounds[color],
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default React.memo(SelectItem);
