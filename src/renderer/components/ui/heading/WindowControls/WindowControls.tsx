import React from "react";

import { useAppSelector } from "@redux";

import Icon from "@components/ui/catalog/Icon/Icon";

import CloseIcon from "@assets/images/header/close.svg";
import MaximizeIcon from "@assets/images/header/maximize.svg";
import UnMaximizeIcon from "@assets/images/header/un-maximize.svg";
import MinimizeIcon from "@assets/images/header/minimize.svg";

import { ThemeColor } from "@services/Theme.service";

import services from "@services/index";

import styles from "./WindowControls.module.scss";

interface WindowControlsProps {
    color?: ThemeColor;
}

const WindowControls = ({ color = "primary" }: WindowControlsProps) => {
    const isMaximize = useAppSelector((state) => state.window.isMaximize);

    const close = async () => {
        await services.window.close();
    };

    const maximize = async () => {
        await services.window.maximize();
    };

    const unMaximize = async () => {
        await services.window.unMaximize();
    };

    const minimize = async () => {
        await services.window.minimize();
    };

    return (
        <div className={styles.controls}>
            <div className={styles.control}>
                <Icon
                    icon={MinimizeIcon}
                    width="1rem"
                    height=".2rem"
                    color={color}
                    onClick={minimize}
                />
            </div>

            <div className={styles.control}>
                {isMaximize ? (
                    <Icon
                        icon={UnMaximizeIcon}
                        width="1.1rem"
                        height="1.1rem"
                        color={color}
                        onClick={unMaximize}
                    />
                ) : (
                    <Icon
                        icon={MaximizeIcon}
                        width="1.1rem"
                        height="1.1rem"
                        color={color}
                        onClick={maximize}
                    />
                )}
            </div>

            <div className={styles.control}>
                <Icon
                    icon={CloseIcon}
                    width="1.1rem"
                    height="1.1rem"
                    color={color}
                    onClick={close}
                />
            </div>
        </div>
    );
};

export default React.memo(WindowControls);
