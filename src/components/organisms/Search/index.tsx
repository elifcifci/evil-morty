import SeachItem from "../../molecules/SearchItem/index";
import SeachInput from "../../molecules/SearchInput/index";
import styles from "./search.module.scss";

const Seach = () => {
  return (
    <div className={styles.seachWrapper}>
      <SeachInput />
      <div className={styles.searchItems}>
        <SeachItem id={"dsad"} value={"fafa"} episodes={54} />
        <SeachItem id={"cdcd"} value={"cdcdcd"} episodes={4} />
        <SeachItem id={"nhgnhg"} value={"nhgngmng"} episodes={555} />
      </div>
    </div>
  );
};

export default Seach;