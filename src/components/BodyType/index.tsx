import { bodyTypeToSelect } from "../../data/bodyType";
import ItemBlock from "../ItemBlock";
import ProgressBar from "../ProgressBar";
import Title from "../Title";
import style from "./bodyType.module.scss";

const BodyType = () => {
  return (
    <div className={style.bodyType}>
      <ProgressBar progress={60} />
      <div className="container">
        <Title title="Choose your current body type" />
        <div className={style.content}>
          {bodyTypeToSelect.map((body) => {
            return <ItemBlock key={body.id} planType={body} type="bodyType" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyType;
