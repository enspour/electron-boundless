import React from "react";

import styles from "./SimpleCarousel.module.scss";

interface SimpleCarouselProps {
    index: number;
    children: React.ReactNode[];
}

const SimpleCarousel = ({ index, children }: SimpleCarouselProps) => {
    return (
        <div className={styles.carousel}>
            {children.map((item, idx) => (
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

export default React.memo(SimpleCarousel);
