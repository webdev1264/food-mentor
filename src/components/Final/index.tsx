import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProgressBar from "../ProgressBar";
import Title from "../Title";
import { planSelector } from "../../redux/selectors";
import lock from "../../assets/logos/lock.png";
import style from "./final.module.scss";

const Final = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const plan = useSelector(planSelector);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  if (isSubmit) {
    return (
      <div className={style.final}>
        <ProgressBar progress={100} />
        <div className="container">
          <Title title="The message has been sent to you!" />
          <h3 className={style.subtitle}>Summary</h3>
          <ul>
            <li>Gender: {plan.gender}</li>
            <li>Your body type: {plan.bodyType}</li>
            <li>Your goal: {plan.goal}</li>
            <li>Workout: {plan.workout}</li>
          </ul>
          <Link to="/">
            <button className={style.homeBtn}>Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.final}>
      <ProgressBar progress={100} />
      <div className="container">
        <Title title="Enter your email to get your Personal Weight loss Plan!" />
        <div className={style.content}>
          <form onSubmit={handleSubmit}>
            <input className={style.email} name="email" type="email" placeholder="Your email" />
            <div className={style.privacy}>
              <div className={style.lock}>
                <img src={lock} alt="Lock" />
              </div>
              <p className={style.description}>
                We respect your privacy and use your email only to send you the Food-mentor program
                and other important emails. You won't receive spam
              </p>
            </div>
            <button className={style.submitBtn} type="submit">
              Get my plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Final;
