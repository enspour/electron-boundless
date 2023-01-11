import { useEffect, useRef, useState } from "react";

const useInfinitySimpleCarousel = (count: number, transition: number) => {
    const [index, setIndex] = useState(1);

    const carouselRef = useRef<HTMLDivElement>();

    const nextSlide = () => {
        carouselRef.current.style.transition = `${transition}ms`;
        setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        carouselRef.current.style.transition = `${transition}ms`;
        setIndex((prev) => prev - 1);
    };

    useEffect(() => {
        if (index === 0) {
            setTimeout(() => {
                carouselRef.current.style.transition = "0ms";
                setIndex(count);
            }, transition);
        }

        if (index === count + 1) {
            setTimeout(() => {
                carouselRef.current.style.transition = "0ms";
                setIndex(1);
            }, transition);
        }
    }, [index]);

    return {
        index,
        carouselRef,
        nextSlide,
        prevSlide,
    };
};

export default useInfinitySimpleCarousel;
