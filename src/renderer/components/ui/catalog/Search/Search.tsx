import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import SearchIcon from "@assets/images/search/search.svg";
import ClearIcon from "@assets/images/input/clear.svg";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

import styles from "./Search.module.scss";

interface SearchProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    color?: ThemeColor;
}

const Search = ({
    value,
    setValue,
    placeholder,
    color = "primary",
}: SearchProps) => {
    const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clearHandler = () => {
        setValue("");
    };

    return (
        <div
            className={styles.search}
            style={{
                color: `var(--color-${color})`,
                backgroundColor: `var(--bg-${color})`,
            }}
        >
            <Icon
                icon={SearchIcon}
                width="1.2rem"
                height="1.2rem"
                color={color}
            />

            <input
                className={styles.search__input}
                type="text"
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

export default React.memo(Search);
