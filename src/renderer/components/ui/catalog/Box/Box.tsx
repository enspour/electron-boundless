import { memo, FC, ReactNode } from "react";

import styles from "./Box.module.scss";

interface BoxProps {
    children: ReactNode;
    height?: string;
    width?: string;
    padding?: string;
    overflow?: "auto" | "hidden" | "scroll";
}

const Box: FC<BoxProps> = ({
    children,
    height = "100%",
    width = "100%",
    padding = "2rem",
    overflow = "auto",
}) => {
    return (
        <div
            className={styles.box}
            style={{
                height,
                width,
                padding,
                overflow,
            }}
        >
            {children}
        </div>
    );
};

export default memo(Box);
