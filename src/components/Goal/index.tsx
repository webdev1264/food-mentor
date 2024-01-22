import { goalToSelect } from "../../data/goals";
import GoalItem from "../GoalItem";
import ProgressBar from "../ProgressBar";
import Title from "../Title";
import style from "./goal.module.scss";

const Goal = () => {
  return (
    <div>
      <ProgressBar progress={40} />
      <div className="container">
        <Title title="Choose your goal" />
        <div className={style.content}>
          {goalToSelect.map((goal) => {
            return <GoalItem key={goal.id} goal={goal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Goal;
