import { memo } from "react";
import { useLoaderData } from "react-router-dom";

import DeckBrowseDescription from "./DeckBrowseDescription";

import { Deck } from "@global/types";

import styles from "./DeckBrowse.module.scss";

type LoaderData = Deck | null;

const DeckBrowse = () => {
    const deck = useLoaderData() as LoaderData;

    return (
        <div className={styles.deck}>
            <div className={styles.deck__name}>{deck.name}</div>

            <DeckBrowseDescription description={deck.description} />
        </div>
    );
};

export default memo(DeckBrowse);
