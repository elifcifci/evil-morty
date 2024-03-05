import styles from "./styles.module.scss";

const ErrorText = ({ error }: any) => {

  return (
    <div className={styles.errorWrapper}>
      <div role="img-wrapper">
        <img src="/images/rick-gaze.gif" alt="Rick Gazes" />
      </div>
      <p>
        Ugh! {error.response.status && <span>{error.response.status}.</span>}{" "}
        This is why I hate relying on other people's work. Gotta fix this mess
        myself.
      </p>
    </div>
  );
};

export default ErrorText;
