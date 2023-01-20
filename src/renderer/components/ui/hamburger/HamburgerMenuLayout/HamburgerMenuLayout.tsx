import { memo, FC, ReactNode } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import BackIcon from "@assets/images/hamburger/back.svg";

import { HamburgerMenuName } from "@services/Hamburger.service";

import services from "@services";

import styles from "./HamburgerMenuLayout.module.scss";

interface HamburgerMenuLayout {
    children: ReactNode;
    title: string;
    previousMenu: HamburgerMenuName;
}

const HamburgerMenuLayout: FC<HamburgerMenuLayout> = ({
    children,
    title,
    previousMenu,
}) => {
    const back = () => services.hamburger.openBackMenu(previousMenu);

    return (
        <div className={styles.menu}>
            <div className={styles.menu__back} onClick={back}>
                <Icon
                    icon={BackIcon}
                    width="1.4rem"
                    height="1.4rem"
                    color="tertiary"
                />

                <div>{title}</div>
            </div>

            {children}
        </div>
    );
};

export default memo(HamburgerMenuLayout);
