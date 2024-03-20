import { IErrorProps } from "../../../Interfaces/erorInterfaces";
import styles from "./styles.module.scss";

const ErrorText = ({ errorStatus }: IErrorProps) => {

  return (
    <div className={styles.errorWrapper}>
      <div role="img-wrapper">
        <img src="/images/rick-gaze.gif" alt="Rick's Gaze" />
      </div>
      <p>
        Ugh! {errorStatus && <span>{errorStatus}.</span>}{" "}
        This is why I hate relying on other people's work. Gotta fix this mess
        myself.
      </p>
    </div>
  );
};

export default ErrorText;
