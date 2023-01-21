import { useRef, memo, FC, ReactNode } from "react";

import useIsHover from "@hooks/css/useIsHover";

import { Backgrounds, BorderColors } from "@services/Theme.service";

import styles from "./DeckBrowse.module.scss";

interface DeckBrowseCardProps {
    title: string;
    value: string;
    icon: ReactNode;
}

const DeckBrowseCard: FC<DeckBrowseCardProps> = ({ title, value, icon }) => {
    const cardRef = useRef();

    const isHover = useIsHover(cardRef);

    return (
        <div
            ref={cardRef}
            className={styles.deck__card}
            style={{
                border: isHover
                    ? `.1rem solid ${BorderColors["secondary"]}`
                    : `.1rem solid ${Backgrounds["secondary"]}`,
            }}
        >
            <div className={styles.deck__card__icon}>{icon}</div>

            <div>
                <div className={styles.deck__card__value}>{value}</div>
                <div className={styles.deck__card__title}>{title}</div>
            </div>
        </div>
    );
};

export default memo(DeckBrowseCard);
