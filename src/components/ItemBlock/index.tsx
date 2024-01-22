import { setPlan } from "../../redux/planSlice";
import { useAppDispatch } from "../../redux/store";
import { PlanKey, PlanPayload } from "../../redux/types";
import style from "./itemBlock.module.scss";

type WorkoutItemProps = {
  planType: Record<string, string>;
  type: PlanKey;
  iconWidth?: string;
};

const WorkoutItem = ({ planType, type, iconWidth = "" }: WorkoutItemProps) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (planType: PlanPayload) => {
    dispatch(setPlan(planType));
  };

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        handleOnClick({ type, value: planType.text });
      }}>
      <div className={style.descrWrapper}>
        <p className={style.description}>{planType.text}</p>
      </div>
      <div className={`${style.imgWrapper} ${planType.color}`}>
        <img src={planType.img} alt={planType.text} style={{ width: `${iconWidth}%` }} />
      </div>
    </div>
  );
};

export default WorkoutItem;
