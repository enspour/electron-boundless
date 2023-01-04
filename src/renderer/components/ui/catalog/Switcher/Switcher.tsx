import React from "react";

import SwitcherItem from "./SwitcherItem";

import useOptions from "@hooks/useOptions";

import { Colors, Backgrounds, ThemeColor } from "@services/Theme.service";

import styles from "./Switcher.module.scss";

export interface SwitcherOptions {
    initialIndex?: number;
    color?: ThemeColor;
}

const initialOptions: SwitcherOptions = {
    initialIndex: 0,
    color: "primary",
};

interface SwitcherProps {
    children: React.ReactNode[];
    onClick?: (index: number) => void;
    options?: SwitcherOptions;
}

const Switcher: React.FC<SwitcherProps> = ({ children, onClick, options }) => {
    const { initialIndex, color } = useOptions(initialOptions, options);
    const [index, setIndex] = React.useState(initialIndex);

    const click = (idx: number) => () => {
        setIndex(idx);
        onClick?.call({}, idx);
    };

    return (
        <div
            className={styles.switcher}
            style={{
                color: Colors[color],
                backgroundColor: Backgrounds[color],
            }}
        >
            {children.map((child, idx) => (
                <SwitcherItem
                    key={idx}
                    onClick={click(idx)}
                    isActive={idx === index}
                    color={color}
                >
                    {child}
                </SwitcherItem>
            ))}
        </div>
    );
};

export default React.memo(Switcher);
