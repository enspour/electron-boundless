import React from "react";

import { Colors, Backgrounds, ThemeColor } from "@services/Theme.service";

import styles from "./Toggle.module.scss";

interface ToggleProps {
    value: boolean;
    setValue: (value: boolean | ((prev: boolean) => boolean)) => void;
    text: string;
    color?: ThemeColor;
}

const Toggle = ({ value, setValue, text, color = "primary" }: ToggleProps) => {
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
                className={styles.toggle}
                style={{
                    backgroundColor: Backgrounds[color],
                }}
            ></span>

            <span
                className={styles.toggle__label}
                style={{
                    color: Colors[color],
                }}
            >
                {text}
            </span>
        </label>
    );
};

export default React.memo(Toggle);
