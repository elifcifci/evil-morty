import { keyboardList } from "../../../constants/keyboard";
import {
  KeyboardTypes,
  ArrowDirection,
  LetterDirection,
  IKeyboardProps,
} from "../../../interfaces/keyboardInterfaces";
import KeyItem from "../../atoms/KeyboardItem";
import styles from "./styles.module.scss";

const Keyboard = ({className}: IKeyboardProps) => {

  return (
    <div className={`${styles.keyboardWrapper} ${className}`}>
      {Object.keys(keyboardList).map((keyType) => {
        return (
          <section key={`keyList-${keyboardList}`}>
            {keyboardList[keyType as KeyboardTypes].map(
              (key: ArrowDirection | LetterDirection) => {
                return (
                  <KeyItem
                    keyboardType={keyType}
                    key={`keyboard-arrows-${key}`}
                    direction={key}
                  />
                );
              }
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Keyboard;
