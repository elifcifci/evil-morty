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

  return (
    <div
      className={`${styles.seachWrapper}  ${
        !!errorStatus ? styles.errorTheme : ""
      } ${isEvilMode ? styles.evilTheme : ""} `}
    >
      <div>
        <h1 className={`${styles.pageTitle} ${isEvilMode ? "evilTheme" : ""}`}>
          {isEvilMode
            ? "The choice is yours... for now."
            : errorStatus
            ? "Pick new one, Morty. But don't screw it up."
            : "Uh, I-I don't know... W-which one is the best?"}
        </h1>

        <SeachInput
          hasError={!!errorStatus}
          setErrorStatus={setErrorStatus}
          isEvilMode={isEvilMode}
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      
      <List
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
