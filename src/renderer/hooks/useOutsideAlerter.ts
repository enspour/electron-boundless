import { useRef, useState, useEffect } from "react";

const useOutsideAlerter = (initial: boolean) => {
    const [isOpen, setIsOpen] = useState(initial);

    const ref = useRef(null);

    const clickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => document.removeEventListener("click", clickOutside);
    }, []);

    return [ref, isOpen, setIsOpen] as const;
};

export default useOutsideAlerter;
