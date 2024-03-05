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
    <div className={styles.seachWrapper}>
      {error ? (
        <ErrorText error={error} />
      ) : (
        <>
          <SeachInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
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
