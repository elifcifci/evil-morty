import styles from "./styles.module.scss";

const EnterButton = () => {
  return (
    <div className={styles.enterWrapper}>
      <div className={styles.square} />
      <div className={styles.rectangle} />
      <span>Enter</span>
    </div>
  );
};

export default EnterButton;
