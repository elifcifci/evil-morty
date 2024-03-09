import { itemList } from "../../../constants/keyboard";
import { IKeyItemProps } from "../../../interfaces/keyboardInterfaces";
import styles from "./styles.module.scss";

const KeyItem = ({ keyboardType, direction }: IKeyItemProps) => {
  let item: JSX.Element | null = null;

  if (keyboardType === "arrows") {
    item = itemList.arrows[direction as keyof typeof itemList.arrows];
  } else if (keyboardType === "letters") {
    item = itemList.letters[direction as keyof typeof itemList.letters];
  }

  return <div className={styles.keyItemWrapper}>{item}</div>;
};

export default KeyItem;
