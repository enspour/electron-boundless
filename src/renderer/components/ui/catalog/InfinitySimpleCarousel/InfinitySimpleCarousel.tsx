import { useMemo, memo, FC, ReactNode, MutableRefObject } from "react";

import styles from "./InfinitySimpleCarousel.module.scss";

interface InfinitySimpleCarouselProps {
    children: ReactNode[];
    carouselRef: MutableRefObject<HTMLDivElement>;
    index: number;
}

const InfinitySimpleCarousel: FC<InfinitySimpleCarouselProps> = ({
    children,
    carouselRef,
    index,
}) => {
    const slides = useMemo(
        () => [children[children.length - 1], ...children, children[0]],
        [children]
    );

    return (
        <div ref={carouselRef} className={styles.carousel}>
            {slides.map((item, idx) => (
                <div
                    key={idx}
                    className={styles.carousel__item}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default memo(InfinitySimpleCarousel);
