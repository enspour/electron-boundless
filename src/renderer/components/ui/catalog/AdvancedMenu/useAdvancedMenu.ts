import { useState, useMemo, ReactNode } from "react";

import useOptions from "@hooks/useOptions";
import useInfinitySimpleCarousel from "../InfinitySimpleCarousel/useInfinitySimpleCarousel";

type Menus = [ReactNode, ReactNode, ReactNode];

export interface AdvancedMenuOptions {
    initialMenu?: ReactNode;
    transition?: number;
}

const initialOptions: AdvancedMenuOptions = {
    initialMenu: null,
    transition: 400,
};

const useAdvancedMenu = (options?: AdvancedMenuOptions) => {
    const { initialMenu, transition } = useOptions(initialOptions, options);

    const [menus, setMenus] = useState<Menus>([initialMenu, null, null]);

    const { index, carouselRef, nextSlide, prevSlide } =
        useInfinitySimpleCarousel(menus.length, transition);

    const realIndex = useMemo(() => index - 1, [index]);

    const openNextMenu = (menu: ReactNode) => {
        setMenus((arr) => {
            if (realIndex + 1 < arr.length) {
                arr[realIndex + 1] = menu;
            } else {
                arr[0] = menu;
            }

            return [...arr];
        });

        nextSlide();
    };

    const openPrevMenu = (menu: ReactNode) => {
        setMenus((arr) => {
            if (realIndex - 1 >= 0) {
                arr[realIndex - 1] = menu;
            } else {
                arr[arr.length - 1] = menu;
            }

            return [...arr];
        });

        prevSlide();
    };

    return {
        index,
        menusRef: carouselRef,
        menus,
        openNextMenu,
        openPrevMenu,
    };
};

export default useAdvancedMenu;
