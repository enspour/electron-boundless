import React from "react";

import Icon from "../Icon/Icon";

import ClearIcon from "@assets/images/input/clear.svg";

import { Colors, Backgrounds, ThemeColor } from "@services/Theme.service";

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
                color: Colors[color],
                backgroundColor: Backgrounds[color],
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
