import SelectedList from "../SelectedList";
import { CaretDown } from "../../../../public/icons/CaretDown";
import { ISeachInputProps } from "../../../Interfaces/mortyUniverseInterface";
import styles from "./searchInput.module.scss";

const SeachInput = ({
  ulRef,
  inputRef,
  setErrorStatus,
  isEvilMode,
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
}: ISeachInputProps) => {
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
       ${isEvilMode ? styles.evilTheme : ""}`}
      onClick={handleClick}
    >
      <ul ref={ulRef} className={styles.list}>
        <SelectedList
          isEvilMode={isEvilMode}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <li>
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
