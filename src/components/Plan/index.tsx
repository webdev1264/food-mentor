import { setPlan } from "../../redux/planSlice";

import { useAppDispatch } from "../../redux/store";
import ProgressBar from "../ProgressBar";
import Title from "../Title";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import icon from "../../assets/logos/icon.svg";
import style from "./plan.module.scss";
import { PlanPayload } from "../../redux/types";

const Plan = () => {
  const dispatch = useAppDispatch();

  const handleOnClick = (gender: PlanPayload) => {
    dispatch(setPlan(gender));
  };

  return (
    <div className={style.plan}>
      <ProgressBar progress={20} />
      <Title title="Weight Loss Plan" description="Choose your gender to get started" />
      <div className="container">
        <div className={style.content}>
          <div
            className={style.wrapper}
            onClick={() => handleOnClick({ type: "gender", value: "male" })}>
            <img className={style.maleImg} src={male} alt="Male" />
            <div className={style.maleBtn}>
              <div>Male</div>
              <div className={style.icon}>
                <img src={icon} alt="Icon" />
              </div>
            </div>
          </div>
          <div
            className={style.wrapper}
            onClick={() => handleOnClick({ type: "gender", value: "female" })}>
            <img className={style.femaleImg} src={female} alt="Female" />
            <div className={style.femaleBtn}>
              <div>Female</div>
              <div className={style.icon}>
                <img src={icon} alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
