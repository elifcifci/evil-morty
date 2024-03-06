import React from "react";
import SeachInput from "../../molecules/SearchInput/index";
import ErrorText from "../../molecules/ErrorText";
import List from "../List/index";
import { ISearchProps } from "../../../interfaces/SearchProps";
import styles from "./search.module.scss";

const Seach = ({ isEvilMode, error, apiData }: ISearchProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItems, setSelectedItems] = React.useState<
    { id: string; name: string }[]
  >([]);

  return (
    <div
      className={`${styles.seachWrapper} ${isEvilMode ? styles.evilTheme : ""}`}
    >
      {error.message ? (
        <ErrorText error={error} />
      ) : (
        <>
          <div>
            <h1
              className={`${styles.pageTitle} ${
                isEvilMode ? "evilTheme" : ""
              }`}
            >
              {isEvilMode
                ? "The choice is yours... for now."
                : "Pick one, Morty. But don't screw it up."}
            </h1>

            <SeachInput
              isEvilMode={isEvilMode}
              inputValue={inputValue}
              setInputValue={setInputValue}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>

          <List
            apiData={apiData}
            inputValue={inputValue}
            isEvilMode={isEvilMode}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </>
      )}
    </div>
  );
};

export default Seach;
