import { useState, useRef, ReactNode, useEffect } from "react";

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

    const temp = useRef<ReactNode>(initialMenu);

    const [menus, setMenus] = useState<Menus>([null, null, null]);

    const { index, carouselRef, nextSlide, prevSlide } =
        useInfinitySimpleCarousel(menus.length, transition);

    const openNextMenu = (menu: ReactNode) => {
        temp.current = menu;
        nextSlide();
    };

    const openPrevMenu = (menu: ReactNode) => {
        temp.current = menu;
        prevSlide();
    };

    useEffect(() => {
        const result: Menus = [...menus];

        const realIndex = index - 1;

        if (0 <= realIndex && realIndex <= menus.length - 1) {
            result[realIndex] = temp.current;
        }

        if (realIndex < 0) {
            result[menus.length - 1] = temp.current;
        }

        if (realIndex > menus.length - 1) {
            result[0] = temp.current;
        }

        setMenus(result);
    }, [index]);

    return {
        index,
        menusRef: carouselRef,
        menus,
        openNextMenu,
        openPrevMenu,
    };
};

export default useAdvancedMenu;
