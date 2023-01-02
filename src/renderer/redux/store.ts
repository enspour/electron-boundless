import { configureStore } from "@reduxjs/toolkit";

import { hamburgerReducer } from "./ducks/hamburger";
import { windowReducer } from "./ducks/window";

export const store = configureStore({
    reducer: {
        window: windowReducer,
        hamburger: hamburgerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
