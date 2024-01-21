import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlanKey, PlanState } from "./types";

const initialState: PlanState = {
  step: 1,
  selectedPlan: {
    gender: "",
    bodyType: "",
    workout: "",
  },
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setPlan(state, action: PayloadAction<{ type: PlanKey; value: string }>) {
      state.selectedPlan[action.payload.type] = action.payload.value;
    },
  },
});

export const { setStep, setPlan } = planSlice.actions;

export default planSlice.reducer;
