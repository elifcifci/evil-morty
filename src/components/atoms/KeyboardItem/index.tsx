import { itemList } from "../../../constants/keyboard";
import { IKeyItemProps } from "../../../interfaces/keyboardInterfaces";
import styles from "./styles.module.scss";

const KeyItem = ({ selectedKey, keyboardType, direction }: IKeyItemProps) => {
  let item: JSX.Element | null = null;

  if (keyboardType === "arrows") {
    item = itemList.arrows[direction as keyof typeof itemList.arrows];
  } else if (keyboardType === "letters") {
    item = itemList.letters[direction as keyof typeof itemList.letters];
  } else {
    item = itemList.enter;
  }

  return keyboardType === "enter" ? (
    <div
      className={
        selectedKey === keyboardType ? styles.selectedEnterKey : styles.unselectedEnterKey
      }
    >
      {item}
    </div>
  ) : (
    <div
      role={`${keyboardType}-${direction ?? ""}`}
      className={`${styles.keyItemWrapper} ${
        selectedKey === direction ? styles.selectedKey : styles.unselectedKey
      }`}
    >
      {item}
    </div>
  );
};

export default KeyItem;
