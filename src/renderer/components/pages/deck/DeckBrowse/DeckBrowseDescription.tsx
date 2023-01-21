import { memo, FC } from "react";

import styles from "./DeckBrowse.module.scss";

interface DeckBrowseDescriptionProps {
    description: string;
}

const DeckBrowseDescription: FC<DeckBrowseDescriptionProps> = ({
    description,
}) => {
    if (!description) {
        return null;
    }

    return (
        <div className={styles.deck__description}>
            <div className={styles.deck__description__title}>Description</div>
            <div className={styles.deck__description__text}>{description}</div>
        </div>
    );
};

export default memo(DeckBrowseDescription);
