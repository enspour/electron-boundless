import { memo, FC, ReactNode } from "react";

import styles from "./HamburgerMenuLayout.module.scss";

interface HamburgerMenuLayoutProps {
    children: ReactNode;
}

const HamburgerMenuLayout: FC<HamburgerMenuLayoutProps> = ({ children }) => {
    return <div className={styles.menu}>{children}</div>;
};

export default memo(HamburgerMenuLayout);
