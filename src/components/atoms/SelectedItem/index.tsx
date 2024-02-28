import {XMark} from "../../../../public/icons/XMark"
import styles from "./searchedItem.module.scss";

interface ISeachItemProps {
  id: string;
  value: string;
}

const SelectedItem = ({ id, value }: ISeachItemProps) => {
  return (
    <div className={styles.selectedItemWrapper} onClick={(e) => e.stopPropagation()}>
      <span id={id}>{value}</span>
      <XMark iconSize="xs" className={styles.xMark} />
    </div>
  );
};

export default SelectedItem;