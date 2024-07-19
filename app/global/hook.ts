// import { useDispatch, useSelector, useStore } from "react-redux";
// import type { RootState, AppDispatch, AppStore } from "./store";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();
// export const useAppStore = useStore.withTypes<AppStore>();


import { TypedUseSelectorHook, useDispatch as useDispatchBase, useSelector as useSelectorBase, useStore as useStoreBase } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatchBase<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
export const useAppStore = () => useStoreBase<AppStore>();

