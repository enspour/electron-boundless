import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { hamburgerActions, useAppDispatch } from "@redux";

import HamburgerIcon from "@assets/images/hamburger/hamburger.svg";

import styles from "./HamburgerControl.module.scss";

const HamburgerControl = () => {
    const dispatch = useAppDispatch();

    const toggle = () => {
        dispatch(hamburgerActions.toggle());
    };

    return (
        <div className={styles.control}>
            <Icon
                icon={HamburgerIcon}
                width="1.4rem"
                height="1.2rem"
                onClick={toggle}
            />
        </div>
    );
};

export default React.memo(HamburgerControl);
