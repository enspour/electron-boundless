import { memo, useEffect } from "react";

import { decksActions, useAppDispatch, useAppSelector } from "@redux";

import DeckCard from "@components/ui/catalog/DeckCard/DeckCard";
import DecksEmpty from "./DecksEmpty";

import styles from "./Decks.module.scss";

const Decks = () => {
    const status = useAppSelector((state) => state.decks.status);
    const decks = useAppSelector((state) => state.decks.decks);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(decksActions.update());
    }, []);

    if (status === "pending") {
        return <div className="lds-hourglass"></div>;
    }

    if (status === "done" && decks.length === 0) {
        return <DecksEmpty />;
    }

    return (
        <div className={styles.decks}>
            {decks.map((deck) => (
                <DeckCard
                    key={deck.id}
                    deck={deck}
                    primary="secondary"
                    secondary="tertiary"
                />
            ))}
        </div>
    );
};

export default memo(Decks);
