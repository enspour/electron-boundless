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

    return <div className={styles.deck__description}>{description}</div>;
};

export default memo(DeckBrowseDescription);
