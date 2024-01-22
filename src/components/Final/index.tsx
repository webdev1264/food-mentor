import { useState } from "react";
import ProgressBar from "../ProgressBar";
import Title from "../Title";
import lock from "../../assets/logos/lock.png";
import style from "./final.module.scss";
import { Link } from "react-router-dom";

const Final = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  if (!isSubmit) {
    return (
      <div className={style.bodyType}>
        <ProgressBar progress={100} />
        <div className="container">
          <Title title="The message has been sent to you!" />
          <Link to="/">
            <button className={style.homeBtn}>Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.bodyType}>
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
