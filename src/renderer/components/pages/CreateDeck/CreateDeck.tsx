import React from "react";

import Input from "@components/ui/catalog/Input/Input";
import FilledButton from "@components/ui/catalog/FilledButton/FilledButton";
import FlatSelect from "@components/ui/catalog/FlatSelect/FlatSelect";

import styles from "./CreateDeck.module.scss";

const CreateDeck = () => {
    const [name, setName] = React.useState("");

    const create = () => {};

    return (
        <div className={styles.deck}>
            <div className={styles.deck__title}>Create new Deck</div>

            <div>
                <div className={styles.deck__details__title}>Deck Name</div>

                <Input
                    value={name}
                    setValue={setName}
                    placeholder="Name"
                    color="secondary"
                />
            </div>

            <div className={styles.deck__level}>
                <div className={styles.deck__details__title}>Deck Level</div>

                <FlatSelect options={{ color: "secondary" }}>
                    <div>Beginners</div>
                    <div>Pre-intermediate</div>
                    <div>Intermediate</div>
                    <div>Upper-intermediate</div>
                    <div>Advanced</div>
                    <div>Mastery</div>
                </FlatSelect>
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
