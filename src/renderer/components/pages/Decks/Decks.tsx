import React from "react";
import { useNavigate } from "react-router-dom";

import FilledButton from "@components/ui/catalog/FilledButton/FilledButton";

import styles from "./Decks.module.scss";

const EmptyDecks = () => {
    const navigate = useNavigate();

    const create = () => {
        navigate("/decks/create");
    };

    return (
        <div className={styles.decks__empty}>
            <div className={styles.decks__empty__title}>DECKS</div>

            <div className={styles.decks__empty__hint}>
                You don't have decks yet. You can create a new one.
            </div>

            <div className={styles.decks__empty__button}>
                <FilledButton onClick={create} color="secondary">
                    Create
                </FilledButton>
            </div>
        </div>
    );
};

const Decks = () => {
    return <EmptyDecks />;
};

export default React.memo(Decks);
