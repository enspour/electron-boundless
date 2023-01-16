import { memo } from "react";

import AsyncFilledButton from "@components/ui/catalog/AsyncFilledButton/AsyncFilledButton";

import services from "@services";

import styles from "./Decks.module.scss";

const DecksEmpty = () => {
    const create = async () => {
        const deck = await services.decks.createOneDefault();
        services.hamburger.openNextMenu("deck", `/decks/browse/${deck.id}`);
    };

    return (
        <div className={styles.decks__empty}>
            <div className={styles.decks__empty__title}>DECKS</div>

            <div className={styles.decks__empty__hint}>
                You don't have decks yet. You can create a new one.
            </div>

            <div className={styles.decks__empty__button}>
                <AsyncFilledButton onClick={create} color="secondary">
                    Create
                </AsyncFilledButton>
            </div>
        </div>
    );
};

export default memo(DecksEmpty);
