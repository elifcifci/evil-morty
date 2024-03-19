import React from "react";
import SeachInput from "../../molecules/SearchInput/index";
import List from "../List/index";
import { ISearchProps } from "../../../interfaces/SearchProps";
import styles from "./search.module.scss";

const Seach = ({
  isLoading,
  inputValue,
  setInputValue,
  isEvilMode,
  apiData,
  errorStatus,
  setErrorStatus,
}: ISearchProps) => {
  const [selectedItems, setSelectedItems] = React.useState<
    { id: string; name: string }[]
  >([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
      ulRef.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      })
    }
  };

  return (
    <div
      className={`${styles.seachWrapper}
      ${isEvilMode ? styles.evilTheme : ""} `}
    >
      <div>
        <h1 className={`${styles.pageTitle} ${isEvilMode ? "evilTheme" : ""}`}>
          {isEvilMode
            ? "The choice is yours... for now."
            : "Uh, I-I don't know... W-which one is the best?"}
        </h1>

        <SeachInput
          ulRef={ulRef}
          inputRef={inputRef}
          setErrorStatus={setErrorStatus}
          isEvilMode={isEvilMode}
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      <List
        handleClick={handleClick}
        isLoading={isLoading}
        errorStatus={errorStatus}
        apiData={apiData}
        inputValue={inputValue}
        isEvilMode={isEvilMode}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
};

export default Seach;
