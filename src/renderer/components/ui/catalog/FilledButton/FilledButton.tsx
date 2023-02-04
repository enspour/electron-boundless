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
    disabled?: boolean;
    color?: ThemeColor;
}

const FilledButton = ({
    children,
    onClick,
    disabled,
    color,
}: FilledButtonProps) => {
    const buttonRef = React.useRef();

    const isHover = useIsHover(buttonRef);

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        onClick();
    };

    return (
        <div ref={buttonRef}>
            <button
                className={styles.button}
                style={{
                    color:
                        isHover && !disabled
                            ? HoverColors[color]
                            : Colors[color],
                    backgroundColor:
                        isHover && !disabled
                            ? HoverBackgrounds[color]
                            : Backgrounds[color],
                }}
                disabled={disabled}
                onClick={clickHandler}
            >
                {children}
            </button>
        </div>
    );
};

export default React.memo(FilledButton);
