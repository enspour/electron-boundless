import React from "react";

import Icon from "@components/ui/catalog/Icon/Icon";

import services from "@services/index";

import UndoIcon from "@assets/images/hamburger/undo.svg";
import RedoIcon from "@assets/images/hamburger/redo.svg";

import styles from "./UndoRedoControls.module.scss";

const UndoRedoControls = () => {
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
    );
};

export default React.memo(UndoRedoControls);
