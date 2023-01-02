import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

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
                color: isHover
                    ? `var(--color-hover-${_color})`
                    : `var(--color-${_color})`,
                backgroundColor: isHover
                    ? `var(--bg-hover-${_color})`
                    : `var(--bg-${_color})`,
            }}
            onClick={clickHandler}
        >
            {children}
        </div>
    );
};

export default React.memo(SelectItem);
