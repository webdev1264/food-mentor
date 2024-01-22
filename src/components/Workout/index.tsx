import { workoutToSelect } from "../../data/workout";
import ProgressBar from "../ProgressBar";
import Title from "../Title";
import ItemBlock from "../ItemBlock";
import style from "./workout.module.scss";

const Workout = () => {
  return (
    <div className={style.workout}>
      <ProgressBar progress={80} />
      <div className="container">
        <Title title="Do you workout?" />
        <div className={style.content}>
          {workoutToSelect.map((workout) => {
            return <ItemBlock key={workout.id} planType={workout} type="workout" iconWidth="60" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Workout;
