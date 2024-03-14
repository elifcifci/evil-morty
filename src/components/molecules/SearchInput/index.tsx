import React from "react";
import SelectedList from "../SelectedList";
import { CaretDown } from "../../../../public/icons/CaretDown";
import { ISeachInputProps } from "../../../interfaces/SearchProps";
import styles from "./searchInput.module.scss";

const SeachInput = ({
  hasError,
  setErrorStatus,
  isEvilMode,
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
}: ISeachInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value.toString());
    setErrorStatus(undefined);
  };

  return (
    <div
      className={`${styles.seachInputWrapper}
       ${hasError ? styles.errorTheme : ""}
       ${isEvilMode ? styles.evilTheme : ""}`}
      onClick={handleClick}
    >
      <ul className={styles.list}>
        <SelectedList
          isEvilMode={isEvilMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <li
        // style={{
        //   width: `${
        //     inputValue.length > 0 ? inputValue.length * 8 + 15 : 0
        //   }px`,
        // }}
        >
          <input
            ref={inputRef}
            typeof="text"
            onChange={handleChange}
            value={inputValue}
          />
        </li>
      </ul>

      <CaretDown className={styles.caretDown} iconSize="m" />
    </div>
  );
};

export default SeachInput;
