import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Colors,
    Backgrounds,
    HoverBackgrounds,
    HoverColors,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./FilledButton.module.scss";

interface FilledButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    color?: ThemeColor;
}

const FilledButton = ({ children, onClick, color }: FilledButtonProps) => {
    const buttonRef = React.useRef();

    const isHover = useIsHover(buttonRef);

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        onClick();
    };

    return (
        <div
            ref={buttonRef}
            className={styles.wrapper}
            style={{
                color: Colors[color],
                backgroundColor: Backgrounds[color],
            }}
            onClick={clickHandler}
        >
            <button
                className={styles.button}
                style={{
                    color: isHover ? HoverColors[color] : Colors[color],
                    backgroundColor: isHover
                        ? HoverBackgrounds[color]
                        : Backgrounds[color],
                }}
            >
                {children}
            </button>
        </div>
    );
};

export default React.memo(FilledButton);
