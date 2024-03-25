import SelectedList from "../SelectedList";
import { Pen } from "../../../../public/icons/Pen";
import { ISeachInputProps } from "../../../Interfaces/mortyUniverseInterface";
import styles from "./searchInput.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { updateInput } from "../../../features/inputValue/inputValueSlice";

const SeachInput = ({
  ulRef,
  inputRef,
  selectedItems,
  setSelectedItems,
}: ISeachInputProps) => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);
  const inputValue = useSelector(
    (state: RootState) => state.inputValue.inputValue
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: any) => {
    dispatch(updateInput(e.target.value.toString()));
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

      <Pen className={styles.caretDown} iconSize="s" />
    </div>
  );
};

export default SeachInput;
