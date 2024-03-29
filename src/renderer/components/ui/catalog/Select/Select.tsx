import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import TruthRender from "@components/utils/TruthRender";
import SelectItem from "./SelectItem";

import useOptions from "@hooks/useOptions";

import SelectIcon from "@assets/images/select/select.svg";

import {
    Colors,
    Backgrounds,
    BorderColors,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./Select.module.scss";

export interface SelectOptions {
    initialIndex?: number;
    color?: ThemeColor;
}

const initialOptions: SelectOptions = {
    initialIndex: 0,
    color: "primary",
};

interface SelectProps {
    children: React.ReactNode[];
    onClick?: (index: number) => void;
    options?: SelectOptions;
}

const Select = ({ children, onClick, options }: SelectProps) => {
    const items = React.useMemo(
        () =>
            children.map((element, index) => ({
                element,
                index,
            })),
        [children]
    );

    const { initialIndex, color } = useOptions(initialOptions, options);

    const [isOpen, setIsOpen] = React.useState(false);
    const [index, setIndex] = React.useState(initialIndex);

    const restItems = items.filter((_, idx) => idx !== index);

    const toggle = () => setIsOpen((prev) => !prev);

    const click = (idx: number) => () => {
        setIndex(idx);
        onClick?.call({}, idx);
    };

    return (
        <div
            className={styles.select}
            style={{
                color: Colors[color],
                backgroundColor: Backgrounds[color],
                border: isOpen
                    ? `0.1rem solid ${BorderColors[color]}`
                    : `0.1rem solid ${Backgrounds[color]}`,
                borderRadius: isOpen ? "1rem 1rem 0 0" : "1rem",
            }}
            onClick={toggle}
        >
            <div className={styles.select__selected__item}>
                {children[index]}
            </div>

            <div
                style={{
                    display: "flex",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
            >
                <Icon
                    icon={SelectIcon}
                    width="1.2rem"
                    height=".8rem"
                    color={color}
                />
            </div>

            <TruthRender conditional={isOpen}>
                <div
                    className={styles.select__items}
                    style={{
                        color: `var(--color-${color})`,
                        backgroundColor: `var(--bg-${color})`,
                    }}
                >
                    {restItems.map((item) => (
                        <SelectItem
                            key={item.index}
                            onClick={click(item.index)}
                            color={color}
                        >
                            {item.element}
                        </SelectItem>
                    ))}
                </div>
            </TruthRender>
        </div>
    );
};

export default React.memo(Select);
