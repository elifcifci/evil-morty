import React from "react";
import SelectedItem from "../../atoms/SelectedItem";
import { CaretDown } from "../../../../public/icons/CaretDown";
import styles from "./searchInput.module.scss";

interface ISeachInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SeachInput = ({ value, setValue }: ISeachInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.seachInputWrapper} onClick={handleClick}>
      <div className={styles.inputWrapper}>
        <SelectedItem id="10" value="ölş" />
        <input
          ref={inputRef}
          typeof="text"
          onChange={handleChange}
          value={value}
        />
      </div>

      <CaretDown className={styles.caretDown} iconSize="m" secondary />
    </div>
  );
};

export default SeachInput;