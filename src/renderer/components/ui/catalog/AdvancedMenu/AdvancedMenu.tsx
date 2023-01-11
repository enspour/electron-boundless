import { memo, MutableRefObject, ReactNode } from "react";

import InfinitySimpleCarousel from "../InfinitySimpleCarousel/InfinitySimpleCarousel";

import styles from "./AdvancedMenu.module.scss";

type Menus = [ReactNode, ReactNode, ReactNode];

interface AdvancedMenuProps {
    index: number;
    menus: Menus;
    menusRef: MutableRefObject<HTMLDivElement>;
}

const AdvancedMenu = ({ index, menus, menusRef }: AdvancedMenuProps) => {
    return (
        <InfinitySimpleCarousel index={index} carouselRef={menusRef}>
            {menus.map((menu, index) => (
                <div key={index} className={styles.advanced__menu__item}>
                    {menu}
                </div>
            ))}
        </InfinitySimpleCarousel>
    );
};

export default memo(AdvancedMenu);
