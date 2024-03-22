import SelectedList from "../SelectedList";
import { CaretDown } from "../../../../public/icons/CaretDown";
import { ISeachInputProps } from "../../../Interfaces/mortyUniverseInterface";
import styles from "./searchInput.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const SeachInput = ({
  ulRef,
  inputRef,
  setErrorStatus,
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
}: ISeachInputProps) => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

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
