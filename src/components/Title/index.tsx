import style from "./title.module.scss";

type TitleProps = {
  title: string;
  description?: string;
};

const Title = ({ title, description = "" }: TitleProps) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default Title;
