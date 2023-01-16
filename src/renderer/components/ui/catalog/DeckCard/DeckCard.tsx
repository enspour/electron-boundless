import { memo, FC, MouseEvent } from "react";

import { decksActions, useAppDispatch } from "@redux";

import Icon from "../Icon/Icon";

import { Deck } from "@global/types";

import RemoveIcon from "@assets/images/deck-card/remove.svg";

import {
    Colors,
    Backgrounds,
    BorderColors,
    ThemeColor,
} from "@services/Theme.service";

import services from "@services";

import styles from "./DeckCard.module.scss";

interface DeckCardProps {
    deck: Deck;
    primary?: ThemeColor;
    secondary?: ThemeColor;
}

const DeckCard: FC<DeckCardProps> = ({
    deck,
    primary = "primary",
    secondary = "primary",
}) => {
    const dispatch = useAppDispatch();

    const open = () => {
        services.hamburger.openNextMenu("deck", `/decks/browse/${deck.id}`);
    };

    const remove = async (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        await services.decks.removeOne(deck.id);
        dispatch(decksActions.update());
    };

    return (
        <div
            className={styles.card}
            style={{
                color: Colors[primary],
                backgroundColor: Backgrounds[primary],
                border: `0.1rem solid ${BorderColors[primary]}`,
            }}
            onClick={open}
        >
            <div className={styles.card__wrapper}>
                <div
                    className={styles.card__level}
                    style={{
                        color: Colors[secondary],
                        backgroundColor: Backgrounds[secondary],
                    }}
                >
                    {deck.level}
                </div>

                <Icon
                    icon={RemoveIcon}
                    width="1.2rem"
                    height="1.2rem"
                    onClick={remove}
                />
            </div>

            <div className={styles.card__info}>
                <div className={styles.card__name}>{deck.name}</div>
            </div>
        </div>
    );
};

export default memo(DeckCard);
