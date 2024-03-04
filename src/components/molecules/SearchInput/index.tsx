import React from "react";
import SelectedList from "../SelectedList";
import { CaretDown } from "../../../../public/icons/CaretDown";
import { ISeachInputProps } from "../../../interfaces/SearchProps";
import styles from "./searchInput.module.scss";

const SeachInput = ({
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
}: ISeachInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showPlaceholder, setShowPlaceHolder] = React.useState(true);

  const handleClick = () => {
    setShowPlaceHolder(false);
    
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.seachInputWrapper} onClick={handleClick}>
      {(selectedItems.length === 0 && showPlaceholder) && (
        <p className={styles.placecHolder}>Find me!</p>
      )}

      <ul className={styles.list}>
        <SelectedList
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <li
          style={{
            width: `${
              inputValue.length > 0 ? inputValue.length * 8 + 15 : 0
            }px`,
          }}
        >
          <input
            ref={inputRef}
            typeof="text"
            onChange={handleChange}
            value={inputValue}
          />
        </li>
      </ul>

      <CaretDown className={styles.caretDown} iconSize="m" secondary />
    </div>
  );
};

export default SeachInput;
