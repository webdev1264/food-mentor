import { configureStore } from "@reduxjs/toolkit";
import planSlice from "./planSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    plan: planSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
