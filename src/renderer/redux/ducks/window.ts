import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { WindowSize } from "@services/Window.service";

interface WindowState {
    isMaximize: boolean;
    size: WindowSize;
}

const initialState: WindowState = {
    isMaximize: false,
    size: {
        height: 700,
        width: 1000,
    },
};

const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        setSize: (state, action: PayloadAction<WindowSize>) => {
            state.size = action.payload;
        },

        setIsMaximize: (state, action: PayloadAction<boolean>) => {
            state.isMaximize = action.payload;
        },
    },
});

export const windowActions = windowSlice.actions;

export const windowReducer = windowSlice.reducer;
