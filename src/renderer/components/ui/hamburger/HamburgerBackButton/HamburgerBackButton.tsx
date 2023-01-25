import { memo, FC } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import BackIcon from "@assets/images/hamburger/back.svg";

import { HamburgerMenuName } from "@services/Hamburger.service";

import services from "@services";

import styles from "./HamburgerBackButton.module.scss";

interface HamburgerBackButtonProps {
    title: string;
    name: HamburgerMenuName;
}

const HamburgerBackButton: FC<HamburgerBackButtonProps> = ({ title, name }) => {
    const back = () => services.hamburger.openBackMenu(name);

    return (
        <div className={styles.back} onClick={back}>
            <Icon
                icon={BackIcon}
                width="1.4rem"
                height="1.4rem"
                color="tertiary"
            />

            <div>{title}</div>
        </div>
    );
};

export default memo(HamburgerBackButton);
