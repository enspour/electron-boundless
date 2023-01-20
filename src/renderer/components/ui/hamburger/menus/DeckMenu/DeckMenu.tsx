import React from "react";
import { useParams } from "react-router-dom";

import { decksActions, useAppDispatch } from "@redux";

import HorizontalMenu from "@components/ui/catalog/HorizontalMenu/HorizontalMenu";
import HorizontalMenuNav from "@components/ui/catalog/HorizontalMenu/HorizontalMenuNav";
import HorizontalMenuLink from "@components/ui/catalog/HorizontalMenu/HorizontalMenuLink";
import HorizontalMenuRemove from "@components/ui/catalog/HorizontalMenu/HorizontalMenuRemove";

import HamburgerMenuLayout from "../../HamburgerMenuLayout/HamburgerMenuLayout";

import services from "@services";

const DeckMenu = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

    const remove = async () => {
        await services.decks.removeOne(id);
        dispatch(decksActions.update());
        services.hamburger.openBackMenu("main");
    };

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

                <HorizontalMenuNav>
                    <HorizontalMenuRemove onClick={remove}>
                        Remove
                    </HorizontalMenuRemove>
                </HorizontalMenuNav>
            </HorizontalMenu>
        </HamburgerMenuLayout>
    );
};

export default React.memo(DeckMenu);
