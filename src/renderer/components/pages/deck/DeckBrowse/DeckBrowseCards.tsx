import { memo, FC } from "react";

import Icon from "@components/ui/catalog/Icon/Icon";
import DeckBrowseCard from "./DeckBrowseCard";

import LevelIcon from "@assets/images/browse-page/level.svg";
import CreatedAtIcon from "@assets/images/browse-page/created-at.svg";
import UpdatedAtIcon from "@assets/images/browse-page/updated-at.svg";

import { Deck } from "@global/types";

import styles from "./DeckBrowse.module.scss";

interface DeckBrowseCardsProps {
    deck: Deck;
}

const DeckBrowseCards: FC<DeckBrowseCardsProps> = ({ deck }) => {
    return (
        <div className={styles.deck__cards}>
            <DeckBrowseCard
                title="Level"
                value={deck.level}
                icon={<Icon icon={LevelIcon} width="1.8rem" height="1.8rem" />}
            />

            <DeckBrowseCard
                title="Last Updated at"
                value={new Date(deck.modifiedAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
                icon={
                    <Icon icon={UpdatedAtIcon} width="1.8rem" height="1.8rem" />
                }
            />

            <DeckBrowseCard
                title="Created at"
                value={new Date(deck.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
                icon={
                    <Icon icon={CreatedAtIcon} width="2.2rem" height="1.6rem" />
                }
            />
        </div>
    );
};

export default memo(DeckBrowseCards);
