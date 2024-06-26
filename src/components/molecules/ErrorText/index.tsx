import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import styles from "./styles.module.scss";

const ErrorText = () => {
  const errorStatus = useSelector((state: RootState) => state.mortyApi.errorStatus)

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
