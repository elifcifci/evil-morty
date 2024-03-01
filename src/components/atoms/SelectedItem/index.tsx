import { XMark } from "../../../../public/icons/XMark";
import styles from "./searchedItem.module.scss";

interface ISeachItemProps {
  id: string;
  value: string;
}

const SelectedItem = ({ id, value }: ISeachItemProps) => {
  const handleKeyDown = () => {
    console.log("silme isteği alındı.");
  };

  return (
    <div
      className={styles.selectedItemWrapper}
      onClick={(e) => e.stopPropagation()}
    >
      <span id={id}>{value}</span>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleKeyDown();
          }
        }}
      >
        <XMark iconSize="xs" className={styles.xMark} />
      </div>
    </div>
  );
};

export default SelectedItem;
