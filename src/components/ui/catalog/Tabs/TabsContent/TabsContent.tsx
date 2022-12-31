import React from "react";

import { TabsOptions } from "../Tabs";

import useStyleRemover from "@hooks/css/useStyleRemover";

import styles from "../Tabs.module.scss";

interface TabsContentProps {
    children: React.ReactNode[];
    index: number;
    options: TabsOptions;
}

const TabsContent = ({ children, index, options }: TabsContentProps) => {
    const [content, setContent] = React.useState(children[index]);

    const contentRef = React.useRef();

    const timeout = React.useRef(null);

    useStyleRemover(
        contentRef,
        styles.tabs__content__switch,
        options.transition,
        [index]
    );

    React.useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setContent(children[index]);
        }, options.transition);

        return () => {
            clearTimeout(timeout.current);
        };
    }, [index]);

    return (
        <div
            ref={contentRef}
            className={styles.tabs__content}
            style={{
                transition: `${options.transition}ms`,
            }}
        >
            {content}
        </div>
    );
};

export default React.memo(TabsContent);
