import React, { ReactElement } from "react";

import TabsContent from "./TabsContent/TabsContent";

import { ThemeColor } from "@assets/styles/themes/types";

import styles from "./Tabs.module.scss";

export interface TabsOptions {
    initialIndex?: number;
    transition?: number;
}

const initialOptions: TabsOptions = {
    initialIndex: 0,
    transition: 200,
};

interface TabsProps {
    children: React.ReactNode[];
    options?: TabsOptions;
    color?: ThemeColor;
}

const Tabs = ({
    children,
    options = initialOptions,
    color = "primary",
}: TabsProps) => {
    const opt = React.useMemo(
        () => Object.assign({}, initialOptions, options),
        []
    );

    const [index, setIndex] = React.useState(opt.initialIndex);

    const tabs = React.useMemo(
        () =>
            React.Children.map(children, (child, idx) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement, {
                        onClick: () => {
                            setIndex(idx);
                            child.props.onClick?.call();
                        },

                        _isActive: idx === index,
                        _color: color,
                    });
                }

                return child;
            }),
        [index]
    );

    const contents = React.useMemo(
        () =>
            React.Children.map(
                children,
                (child: ReactElement) => child.props.children as React.ReactNode
            ),
        []
    );

    return (
        <>
            <div className={styles.tabs}>
                <div
                    className={styles.tabs__items}
                    style={{
                        backgroundColor: `var(--bg-${color})`,
                    }}
                >
                    {tabs}
                </div>
            </div>

            <TabsContent index={index} options={opt}>
                {contents}
            </TabsContent>
        </>
    );
};

export default React.memo(Tabs);
