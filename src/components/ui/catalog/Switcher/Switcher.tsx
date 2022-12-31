import { ThemeColor } from "@assets/styles/themes/types";
import React from "react";

import styles from "./Switcher.module.scss";

interface SwitcherProps {
    value: boolean;
    setValue: (value: boolean | ((prev: boolean) => boolean)) => void;
    text: string;
    color?: ThemeColor;
}

const Switcher = ({
    value,
    setValue,
    text,
    color = "primary",
}: SwitcherProps) => {
    const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked);
    };

    return (
        <label className={styles.container}>
            <input
                className={styles.input}
                type="checkbox"
                checked={value}
                onChange={setValueHandler}
            />

            <span
                className={styles.switcher}
                style={{
                    backgroundColor: `var(--bg-${color})`,
                }}
            ></span>

            <span
                className={styles.switcher__label}
                style={{
                    color: `var(--color-${color})`,
                }}
            >
                {text}
            </span>
        </label>
    );
};

export default React.memo(Switcher);
