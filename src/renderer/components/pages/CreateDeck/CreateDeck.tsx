import React from "react";

import Input from "@components/ui/catalog/Input/Input";
import FilledButton from "@components/ui/catalog/FilledButton/FilledButton";

import styles from "./CreateDeck.module.scss";

const CreateDeck = () => {
    const [name, setName] = React.useState("");

    const create = () => {};

    return (
        <div className={styles.deck}>
            <div className={styles.deck__title}>Create new Deck</div>

            <div className={styles.deck__details}>
                <div className={styles.deck__details__title}>Deck name</div>

                <Input
                    value={name}
                    setValue={setName}
                    placeholder="Name"
                    color="secondary"
                />
            </div>

            <div className={styles.deck__button}>
                <FilledButton onClick={create} color="secondary">
                    Create
                </FilledButton>
            </div>
        </div>
    );
};

export default CreateDeck;
