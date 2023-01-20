import { useRef, memo, FC, MouseEvent } from "react";

import { decksActions, useAppDispatch } from "@redux";

import Icon from "../Icon/Icon";

import useIsHover from "@hooks/css/useIsHover";

import { Deck, Levels } from "@global/types";

import RemoveIcon from "@assets/images/deck-card/remove.svg";
import MoreIcon from "@assets/images/deck-card/more.svg";

import {
    Colors,
    Backgrounds,
    BorderColors,
    ThemeColor,
} from "@services/Theme.service";

import services from "@services";

import styles from "./DeckCard.module.scss";

const shortLevels: Record<Levels, string> = {
    Beginners: "A1",
    "Pre-intermediate": "A2",
    Intermediate: "B1",
    "Upper-intermediate": "B2",
    Advanced: "C1",
    Mastery: "C2",
};

interface DeckCardProps {
    deck: Deck;
    primary?: ThemeColor;
}

const DeckCard: FC<DeckCardProps> = ({ deck, primary = "primary" }) => {
    const cardRef = useRef();

    const isHover = useIsHover(cardRef);

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
            ref={cardRef}
            className={styles.card}
            style={{
                color: Colors[primary],
                backgroundColor: Backgrounds[primary],
                border: isHover
                    ? `0.1rem solid ${BorderColors[primary]}`
                    : `0.1rem solid ${Backgrounds[primary]}`,
            }}
            onClick={open}
        >
            <div
                className={styles.card__controls}
                style={{
                    visibility: isHover ? "visible" : "hidden",
                }}
            >
                <Icon
                    icon={RemoveIcon}
                    width="1.2rem"
                    height="1.2rem"
                    onClick={remove}
                />

                <Icon icon={MoreIcon} width="1.2rem" height=".3rem" />
            </div>

            <div
                className={styles.card__level}
                style={{
                    color: `${Colors[primary]}`,
                }}
            >
                {shortLevels[deck.level]}
            </div>

            <div className={styles.card__name}>{deck.name}</div>
        </div>
    );
};

export default memo(DeckCard);
