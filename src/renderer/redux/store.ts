import { configureStore } from "@reduxjs/toolkit";

import { hamburgerReducer } from "./ducks/hamburger";
import { windowReducer } from "./ducks/window";
import { decksReducer } from "./ducks/decks";

export const store = configureStore({
    reducer: {
        window: windowReducer,
        hamburger: hamburgerReducer,
        decks: decksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
