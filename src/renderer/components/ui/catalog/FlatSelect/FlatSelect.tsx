import { FC, ReactNode, memo, useState } from "react";

import FlatSelectItem from "./FlatSelectItem";

import useOptions from "@hooks/useOptions";

import { ThemeColor } from "@services/Theme.service";

import styles from "./FlatSelect.module.scss";

export interface FlatSelectOptions {
    initialIndex?: number;
    color?: ThemeColor;
}

const initialOptions: FlatSelectOptions = {
    initialIndex: 0,
    color: "primary",
};

interface FlatSelectProps {
    children: ReactNode[];
    onClick?: (index: number) => void;
    options?: FlatSelectOptions;
}

const FlatSelect: FC<FlatSelectProps> = ({ children, onClick, options }) => {
    const { initialIndex, color } = useOptions(initialOptions, options);
    const [index, setIndex] = useState(initialIndex);

    const click = (idx: number) => () => {
        setIndex(idx);
        onClick?.call({}, idx);
    };

    return (
        <div className={styles.select}>
            {children.map((child, idx) => (
                <FlatSelectItem
                    key={idx}
                    isActive={idx === index}
                    onClick={click(idx)}
                    color={color}
                >
                    {child}
                </FlatSelectItem>
            ))}
        </div>
    );
};

export default memo(FlatSelect);
