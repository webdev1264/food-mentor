import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { stepSelector } from "../redux/selectors";
import { useAppDispatch } from "../redux/store";
import { setStep } from "../redux/planSlice";

const Home = () => {
  const step = useSelector(stepSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (step !== 1) {
      dispatch(setStep(1));
    }
  }, [step, dispatch]);

  return (
    <div className="home-wrapper">
      <Link to="/plan-setup">
        <button className="start-btn">Choose your plan</button>
      </Link>
    </div>
  );
};

export default Home;
