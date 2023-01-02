import React from "react";

import TruthRender from "@components/utils/TruthRender";
import Icon from "../Icon/Icon";

import SwitcherIcon from "@assets/images/switcher/switcher.svg";

import { ThemeColor } from "src/renderer/assets/styles/themes/types";

import styles from "./Select.module.scss";

interface SelectProps {
    children: React.ReactNode[];
    initialIndex?: number;
    color?: ThemeColor;
}

const Select = ({ children, initialIndex, color = "primary" }: SelectProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [index, setIndex] = React.useState(initialIndex || 0);

    const items = React.useMemo(
        () =>
            React.Children.map(children, (child, idx) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement, {
                        onClick: () => {
                            setIndex(idx);
                            child.props.onClick?.call();
                        },

                        _color: color,
                    });
                }

                return child;
            }),
        []
    );

    const selectedItem = React.useMemo(
        () =>
            React.cloneElement(children[index] as React.ReactElement, {
                _selected: true,
            }),
        [index]
    );

    const restItems = React.useMemo(
        () => items.filter((_, idx) => idx !== index),
        [index]
    );

    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <div
            className={styles.select}
            style={{
                color: `var(--color-${color})`,
                backgroundColor: `var(--bg-${color})`,
                border: `0.1rem solid var(--border-${color})`,
                borderRadius: isOpen ? "1rem 1rem 0 0" : "1rem",
            }}
            onClick={toggle}
        >
            <div className={styles.select__item__selected}>{selectedItem}</div>

            <div
                style={{
                    display: "flex",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
            >
                <Icon icon={SwitcherIcon} width="1.2rem" height=".8rem" />
            </div>

            <TruthRender conditional={isOpen}>
                <div
                    className={styles.select__items}
                    style={{
                        color: `var(--color-${color})`,
                        backgroundColor: `var(--bg-${color})`,
                    }}
                >
                    {restItems}
                </div>
            </TruthRender>
        </div>
    );
};

export default React.memo(Select);
