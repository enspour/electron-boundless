import React from "react";

import TabsTitle from "./TabsTitle";
import TabsItem from "./TabsItem";

import useOptions from "@hooks/useOptions";

import { Backgrounds, ThemeColor } from "@services/Theme.service";

import styles from "./Tabs.module.scss";

export interface TabsOptions {
    initialIndex?: number;
    transition?: number;
    color?: ThemeColor;
}

const initialOptions: TabsOptions = {
    initialIndex: 0,
    transition: 200,
    color: "primary",
};

interface TabsProps {
    children: React.ReactNode[];
    titles: string[];
    onClick?: (index: number) => void;
    options?: TabsOptions;
}

const Tabs = ({ children, titles, onClick, options }: TabsProps) => {
    if (children.length !== titles.length) {
        throw new Error("Length of children doesn't equal length of titles.");
    }

    const { initialIndex, transition, color } = useOptions(
        initialOptions,
        options
    );

    const [index, setIndex] = React.useState(initialIndex);

    const click = (idx: number) => () => {
        setIndex(idx);
        onClick?.call({}, idx);
    };

    return (
        <>
            <div className={styles.tabs}>
                <div
                    className={styles.tabs__titles}
                    style={{
                        backgroundColor: Backgrounds[color],
                    }}
                >
                    {titles.map((title, idx) => (
                        <TabsTitle
                            key={idx}
                            onClick={click(idx)}
                            isActive={idx === index}
                            color={color}
                        >
                            {title}
                        </TabsTitle>
                    ))}
                </div>
            </div>

            <TabsItem index={index} transition={transition}>
                {children}
            </TabsItem>
        </>
    );
};

export default React.memo(Tabs);
