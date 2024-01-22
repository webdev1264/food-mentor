import { RootState } from "./store";

const stepSelector = (state: RootState) => state.plan.step;

const planSelector = (state: RootState) => state.plan.selectedPlan;

export { stepSelector, planSelector };
