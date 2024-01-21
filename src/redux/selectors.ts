import { RootState } from "./store";

const stepSelector = (state: RootState) => state.plan.step;

const selectedPlanSelector = (state: RootState) => state.plan.selectedPlan;

export { stepSelector, selectedPlanSelector };
