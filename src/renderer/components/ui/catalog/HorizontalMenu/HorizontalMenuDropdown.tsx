import { useState, memo, FC, ReactNode } from "react";

import Icon from "../Icon/Icon";
import TruthRender from "@components/utils/TruthRender";

import DropdownIcon from "@assets/images/horizontal-menu/dropdown.svg";

import styles from "./HorizontalMenu.module.scss";

interface HorizontalMenuDropdownProps {
    title: string;
    children: ReactNode[];
}

const HorizontalMenuDropdown: FC<HorizontalMenuDropdownProps> = ({
    title,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <div
            className={styles.menu__item__dropdown}
            style={{
                borderRadius: isOpen ? "1rem 1rem 0 0" : "1rem",
                backgroundColor: isOpen
                    ? "var(--bg-hover-secondary)"
                    : "transparent",
            }}
        >
            <div className={styles.menu__item} onClick={toggle}>
                <div>{title}</div>

                <div
                    style={{
                        display: "flex",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <Icon icon={DropdownIcon} width="1.2rem" height=".8rem" />
                </div>
            </div>

            <TruthRender conditional={isOpen}>
                <div className={styles.menu__item__dropdown__items}>
                    {children}
                </div>
            </TruthRender>
        </div>
    );
};

export default memo(HorizontalMenuDropdown);
