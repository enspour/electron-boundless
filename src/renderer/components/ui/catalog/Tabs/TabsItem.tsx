import React from "react";

import useStyleRemover from "@hooks/css/useStyleRemover";

import styles from "./Tabs.module.scss";

interface TabsItemProps {
    children: React.ReactNode[];
    index: number;
    transition: number;
}

const TabsItem = ({ children, index, transition }: TabsItemProps) => {
    const [item, setItem] = React.useState(children[index]);

    const ItemRef = React.useRef();

    const timeout = React.useRef(null);

    useStyleRemover(ItemRef, styles.tabs__item__switch, transition, [index]);

    React.useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setItem(children[index]);
        }, transition);

        return () => {
            clearTimeout(timeout.current);
        };
    }, [index]);

    return (
        <div
            ref={ItemRef}
            className={styles.tabs__item}
            style={{
                transition: `${transition}ms`,
            }}
        >
            {item}
        </div>
    );
};

export default React.memo(TabsItem);
