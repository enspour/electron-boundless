import { memo } from "react";
import { useLoaderData } from "react-router-dom";

import { Word } from "@global/types";

type LoaderData = Word[] | null;

const DeckWords = () => {
    const words = useLoaderData() as LoaderData;

    return <div>DeckWords</div>;
};

export default memo(DeckWords);
