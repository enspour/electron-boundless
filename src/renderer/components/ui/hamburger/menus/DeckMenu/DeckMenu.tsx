import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Icon from "@components/ui/catalog/Icon/Icon";
import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import BackIcon from "@assets/images/hamburger/back.svg";

import services from "@services";

import styles from "./DeckMenu.module.scss";

const DeckMenu = () => {
    const { id } = useParams();

    const back = () => services.hamburger.goBackMenu("main");

    return (
        <div className={styles.deck__menu}>
            <div className={styles.deck__menu__back} onClick={back}>
                <Icon
                    icon={BackIcon}
                    width="1.4rem"
                    height="1.4rem"
                    color="tertiary"
                />

                <div>Deck</div>
            </div>

            <HorizontalMenu>
                <HorizontalMenuNav>
                    <HorizontalMenuLink to={`/decks/browse/${id}`}>
                        Browse
                    </HorizontalMenuLink>

                    <HorizontalMenuLink to={`/decks/words/${id}`}>
                        Words
                    </HorizontalMenuLink>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </div>
    );
};

export default React.memo(DeckMenu);
