import { useState, memo } from "react";

import Search from "@components/ui/catalog/Search/Search";

const SearchControl = () => {
    const [searchedText, setSearchedText] = useState("");

    return (
        <Search
            value={searchedText}
            setValue={setSearchedText}
            placeholder="Search"
            color="primary"
        />
    );
};

export default memo(SearchControl);
