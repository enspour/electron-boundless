import { memo } from "react";
import { useLoaderData } from "react-router-dom";

import { Deck } from "@global/types";

type LoaderData = Deck | null;

const DeckBrowse = () => {
    const deck = useLoaderData() as LoaderData;

    return <div>DeckBrowse</div>;
};

export default memo(DeckBrowse);
