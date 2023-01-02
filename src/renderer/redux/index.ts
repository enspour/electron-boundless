import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { store, RootState, AppDispatch } from "./store";

import { windowActions } from "./ducks/window";
import { hamburgerActions } from "./ducks/hamburger";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, windowActions, hamburgerActions };
