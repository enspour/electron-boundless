import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Content from "./Content/Content";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
    return (
        <main className={styles.main}>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </main>
    );
};

export default React.memo(MainLayout);
