import { keyboardList } from "../../../constants/keyboard";
import {
  KeyboardTypes,
  ArrowDirection,
  LetterDirection,
  IKeyboardProps,
} from "../../../Interfaces/keyboardInterfaces";
import KeyItem from "../../atoms/KeyboardItem";
import styles from "./styles.module.scss";

const Keyboard = ({ selectedKey, className }: IKeyboardProps) => {
  return (
    <div className={`${styles.keyboardWrapper} ${className}`}>
      {Object.keys(keyboardList).map((keyType) => {
        return (
          <section key={`keyList-${keyType}`}>
            {keyType === "enter" ? (
              <KeyItem
                selectedKey={selectedKey}
                keyboardType={keyType}
                key={`keyboard-arrows-enter`}
              />
            ) : (
              keyboardList[keyType as KeyboardTypes].map(
                (key: ArrowDirection | LetterDirection) => {
                  return (
                    <KeyItem
                      selectedKey={selectedKey}
                      keyboardType={keyType}
                      key={`keyboard-arrows-${key}`}
                      direction={key}
                    />
                  );
                }
              )
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Keyboard;
