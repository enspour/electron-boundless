import React from "react";

import useIsHover from "@hooks/css/useIsHover";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

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
                color: `var(--color-${color})`,
                backgroundColor: `var(--bg-${color})`,
            }}
            onClick={clickHandler}
        >
            <button
                className={styles.button}
                style={{
                    color: isHover
                        ? `var(--color-hover-${color})`
                        : `var(--color-${color})`,
                    backgroundColor: isHover
                        ? `var(--bg-hover-${color})`
                        : `var(--bg-${color})`,
                }}
            >
                {children}
            </button>
        </div>
    );
};

export default React.memo(FilledButton);
