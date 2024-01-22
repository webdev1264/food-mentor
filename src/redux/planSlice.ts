import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlanPayload, PlanState } from "./types";

const initialState: PlanState = {
  step: 1,
  selectedPlan: {
    gender: "",
    goal: "",
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
    setPlan(state, action: PayloadAction<PlanPayload>) {
      state.selectedPlan[action.payload.type] = action.payload.value;
      state.step += 1;
    },
  },
});

export const { setStep, setPlan } = planSlice.actions;

export default planSlice.reducer;
