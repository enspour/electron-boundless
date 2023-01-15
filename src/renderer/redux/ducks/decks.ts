import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Deck, LoadingStatus } from "@global/types";

import services from "@services";

interface DecksState {
    status: LoadingStatus;
    decks: Deck[];
}

const initialState: DecksState = {
    status: "idle",
    decks: [],
};

const update = createAsyncThunk("decks/update", async () => {
    return await services.decks.getAll();
});

const decksSlice = createSlice({
    name: "decks",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(update.pending, (state) => {
                state.status = "pending";
            })
            .addCase(update.fulfilled, (state, actions) => {
                state.status = "done";
                state.decks = actions.payload;
            })
            .addCase(update.rejected, (state) => {
                state.status = "error";
            });
    },
});

export const decksActions = {
    update,
    ...decksSlice.actions,
};

export const decksReducer = decksSlice.reducer;
