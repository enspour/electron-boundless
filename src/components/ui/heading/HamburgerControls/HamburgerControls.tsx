import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import { hamburgerActions, useAppDispatch } from "@redux";

import HamburgerIcon from "@assets/images/hamburger/hamburger.svg";
import UndoIcon from "@assets/images/hamburger/undo.svg";
import RedoIcon from "@assets/images/hamburger/redo.svg";

import services from "@services/index";

import styles from "./HamburgerControls.module.scss";

const HamburgerControls = () => {
    const dispatch = useAppDispatch();

    const toggle = () => {
        dispatch(hamburgerActions.toggle());
    };

    const prev = () => {
        services.undoHistory.undo();
    };

    const next = () => {
        services.undoHistory.redo();
    };

    return (
        <div className={styles.controls}>
            <div className={styles.control}>
                <Icon
                    icon={HamburgerIcon}
                    width="1.4rem"
                    height="1.2rem"
                    onClick={toggle}
                />
            </div>

            <div className={styles.controls__history}>
                <div className={styles.control}>
                    <Icon
                        icon={UndoIcon}
                        width="1.4rem"
                        height="1.4rem"
                        onClick={prev}
                    />
                </div>

                <div className={styles.control}>
                    <Icon
                        icon={RedoIcon}
                        width="1.4rem"
                        height="1.4rem"
                        onClick={next}
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(HamburgerControls);
