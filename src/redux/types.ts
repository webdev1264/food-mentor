export type PlanKey = "gender" | "bodyType" | "workout";

export type PlanState = {
  step: number;
  selectedPlan: Record<PlanKey, string>;
};
