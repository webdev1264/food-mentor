import { useSelector } from "react-redux";
import { stepSelector } from "../redux/selectors";

import Plan from "../components/Plan";
import Goal from "../components/Goal";
import BodyType from "../components/BodyType";
import Workout from "../components/Workout";
import Final from "../components/Final";

const PlanSetup = () => {
  const step = useSelector(stepSelector);
  const stepToDisplay = () => {
    switch (step) {
      case 1: {
        return <Plan />;
      }
      case 2: {
        return <Goal />;
      }
      case 3: {
        return <BodyType />;
      }
      case 4: {
        return <Workout />;
      }
      case 5: {
        return <Final />;
      }
      default: {
        return <Plan />;
      }
    }
  };
  return <>{stepToDisplay()}</>;
};

export default PlanSetup;
