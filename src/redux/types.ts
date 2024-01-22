export type PlanKey = "gender" | "goal" | "bodyType" | "workout";

export type PlanPayload = { type: PlanKey; value: string };

export type PlanState = {
  step: number;
  selectedPlan: Record<PlanKey, string>;
};
