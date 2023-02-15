import React from "react";

import Box from "@components/ui/catalog/Box/Box";

import Hamburger from "@components/ui/hamburger/Hamburger/Hamburger";

import styles from "./Content.module.scss";

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <div className={styles.content}>
            <Hamburger />
            <Box height="calc(100vh - 4.5rem)">{children}</Box>
        </div>
    );
};

export default React.memo(Content);
