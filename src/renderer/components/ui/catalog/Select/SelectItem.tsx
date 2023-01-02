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
    onClick?: () => void;

    _selected?: boolean;
    _color?: ThemeColor;
}

const SelectItem = ({
    children,
    onClick,

    _selected = false,
    _color,
}: SelectItemProps) => {
    const itemRef = React.useRef();

    const isHover = useIsHover(itemRef);

    const clickHandler = () => {
        if (!_selected) {
            onClick();
        }
    };

    return (
        <div
            ref={itemRef}
            className={styles.select__item}
            style={{
                color: isHover ? HoverColors[_color] : Colors[_color],
                backgroundColor: isHover
                    ? HoverBackgrounds[_color]
                    : Backgrounds[_color],
            }}
            onClick={clickHandler}
        >
            {children}
        </div>
    );
};

export default React.memo(SelectItem);
