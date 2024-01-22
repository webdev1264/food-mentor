import { useAppDispatch } from "../../redux/store";
import { PlanPayload } from "../../redux/types";
import { setPlan } from "../../redux/planSlice";
import style from "./goalItem.module.scss";

type GoalItemProps = {
  goal: Record<string, string>;
};

const GoalItem = ({ goal }: GoalItemProps) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (goal: PlanPayload) => {
    dispatch(setPlan(goal));
  };

  return (
    <div
      className={style.wrapper}
      onClick={() => handleOnClick({ type: "goal", value: goal.text })}>
      <div className={style.imgWrapper}>
        <img className={goal.color} src={goal.img} alt={goal.text} />
      </div>
      <p className={style.description}>{goal.text}</p>
    </div>
  );
};

export default GoalItem;
