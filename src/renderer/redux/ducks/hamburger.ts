import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HamburgerState {
    isOpen: boolean;
}

const initialState: HamburgerState = {
    isOpen: true,
};

const hamburgerSlice = createSlice({
    name: "hamburger",
    initialState,
    reducers: {
        open: (state) => {
            if (!state.isOpen) {
                state.isOpen = true;
            }
        },

        close: (state) => {
            if (state.isOpen) {
                state.isOpen = false;
            }
        },

        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const hamburgerActions = hamburgerSlice.actions;

export const hamburgerReducer = hamburgerSlice.reducer;
