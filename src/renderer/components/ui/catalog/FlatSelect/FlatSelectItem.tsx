import { FC, ReactNode, useRef } from "react";

import useIsHover from "@hooks/css/useIsHover";

import {
    Colors,
    Backgrounds,
    HoverColors,
    HoverBackgrounds,
    ThemeColor,
} from "@services/Theme.service";

import styles from "./FlatSelect.module.scss";

interface FlatSelectItemProps {
    children: ReactNode;
    isActive: boolean;
    onClick: () => void;
    color: ThemeColor;
}

const FlatSelectItem: FC<FlatSelectItemProps> = ({
    children,
    isActive,
    onClick,
    color,
}) => {
    const flatSelectItemRef = useRef();

    const isHover = useIsHover(flatSelectItemRef);

    return (
        <div
            ref={flatSelectItemRef}
            className={styles.select__item}
            style={{
                color: isHover || isActive ? HoverColors[color] : Colors[color],
                backgroundColor:
                    isHover || isActive
                        ? HoverBackgrounds[color]
                        : Backgrounds[color],
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default FlatSelectItem;
