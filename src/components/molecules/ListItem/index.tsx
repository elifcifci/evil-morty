import React from "react";
import ListItemInfo from "../../atoms/ListItemInfo";
import { ISeachListItemProps } from "../../../interfaces/SearchProps";
import styles from "./searchItem.module.scss";

const ListItem = ({
  isEvilMode,
  id,
  name,
  image,
  episodes,
  inputValue,
  selectedItems,
  setSelectedItems,
}: ISeachListItemProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDownAndClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.checked = !inputRef.current.checked;

      if (inputRef.current.checked) {
        setSelectedItems([...selectedItems, { id: id, name: name }]);
      } else {
        setSelectedItems(selectedItems.filter((item) => item.id !== id));
      }
    }
  };

  return (
    <li
      tabIndex={0}
      className={`${styles.searchItem} ${isEvilMode ? styles.evilTheme : ""}`}
      onClick={handleKeyDownAndClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleKeyDownAndClick();
        }
      }}
    >
      <input
        onClick={handleKeyDownAndClick}
        ref={inputRef}
        tabIndex={-1}
        type="checkbox"
        name={`checkbox-${id}`}
        id={id}
        value={name}
      />

      <ListItemInfo
        id={id}
        name={name}
        inputValue={inputValue}
        episodes={episodes}
        image={image}
      />
    </li>
  );
};

export default ListItem;
