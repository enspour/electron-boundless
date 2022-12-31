import React from "react";

import { ThemeColor } from "@assets/styles/themes/types";

import styles from "./Box.module.scss";

interface BoxProps {
    children: React.ReactNode;
    color?: ThemeColor;
}

const Box = ({ children, color = "primary" }: BoxProps) => {
    return (
        <div
            className={styles.box}
            style={{
                backgroundColor: `var(--bg-${color})`,
                color: `var(--color-${color})`,
            }}
        >
            {children}
        </div>
    );
};

export default React.memo(Box);
