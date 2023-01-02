import React from "react";

import Icon from "../Icon/Icon";

import ClearIcon from "@assets/images/input/clear.svg";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

import styles from "./Input.module.scss";

interface InputProps {
    type?: "text" | "password" | "email";
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    color?: ThemeColor;
}

const Input = ({
    type = "text",
    value,
    setValue,
    placeholder,
    color = "primary",
}: InputProps) => {
    const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearHandler = () => {
        setValue("");
    };

    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: `var(--bg-${color})`,
                color: `var(--color-${color})`,
            }}
        >
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={setValueHandler}
                placeholder={placeholder}
            />

            <Icon
                icon={ClearIcon}
                width="1rem"
                height="1rem"
                color={color}
                onClick={clearHandler}
            />
        </div>
    );
};

export default React.memo(Input);
