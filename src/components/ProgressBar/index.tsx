import style from "./progressBar.module.scss";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={style.progress}>
      <div className={style.progressBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
