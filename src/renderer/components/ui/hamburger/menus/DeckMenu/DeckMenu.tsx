import React from "react";
import { useParams } from "react-router-dom";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";

import HamburgerMenuLayout from "../../HamburgerMenuLayout/HamburgerMenuLayout";

const DeckMenu = () => {
    const { id } = useParams();

    return (
        <HamburgerMenuLayout title="Deck" previousMenu="main">
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
        </HamburgerMenuLayout>
    );
};

export default React.memo(DeckMenu);
