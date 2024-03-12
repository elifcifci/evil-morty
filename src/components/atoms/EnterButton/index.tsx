import styles from "./styles.module.scss";

const EnterButton = () => {
  return (
    <div className={styles.enterWrapper}>
      <div className={styles.topSquare} />
      <div className={styles.bottomRectangle} />
      <span>Enter</span>
    </div>
  );
};

export default EnterButton;
