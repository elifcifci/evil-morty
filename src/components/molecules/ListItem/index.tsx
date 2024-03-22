import React from "react";
import ListItemInfo from "../../atoms/ListItemInfo";
import styles from "./searchItem.module.scss";
import { ISeachListItemProps } from "../../../Interfaces/mortyUniverseInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const ListItem = ({
  handleClick,
  id,
  name,
  image,
  episodes,
  inputValue,
  selectedItems,
  setSelectedItems,
}: ISeachListItemProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  const handleKeyDownAndClick = () => {
    handleClick();

    if (inputRef.current !== null) {
      inputRef.current.checked = !inputRef.current.checked;

      if (inputRef.current?.checked) {
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
        defaultChecked={!!selectedItems.find((item)=> item.id === id)}
      />

      <ListItemInfo
        name={name}
        inputValue={inputValue}
        episodes={episodes}
        image={image}
      />
    </li>
  );
};

export default ListItem;
