import { XMark } from "../../../../public/icons/XMark";
import styles from "./styles.module.scss";
import { ISelectedItemProps } from "../../../Interfaces/mortyUniverseInterface";

const SelectedItem = ({
  isEvilMode,
  id,
  value,
  selectedItems,
  setSelectedItems,
}: ISelectedItemProps) => {
  let removedItemsCheckbox: HTMLInputElement;

  const handleRemove = () => {
    setSelectedItems(selectedItems.filter((item) => item.id != id));

    removedItemsCheckbox = document.getElementsByName(
      `checkbox-${id}`
    )[0] as HTMLInputElement;
    removedItemsCheckbox.checked = false;
  };

  return (
    <li
      className={`${styles.selectedItemWrapper} ${isEvilMode ? styles.evilTheme : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span id={id}>{value}</span>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleRemove();
          }
        }}
      >
        <div className={styles.xMark} onClick={handleRemove}>
          <XMark iconSize="xs" />
        </div>
      </div>
    </li>
  );
};

export default SelectedItem;
