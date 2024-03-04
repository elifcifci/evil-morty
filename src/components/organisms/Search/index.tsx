import React from "react";
import SeachInput from "../../molecules/SearchInput/index";
import List from "../List/index";
import { getRicks } from "../../../api/ricks-api";
import { ISearchProps } from "../../../interfaces/SearchProps";
import styles from "./search.module.scss";

const Seach = ({ isEvilMode }: ISearchProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [apiData, setApiData] = React.useState([]);
  const [selectedItems, setSelectedItems] = React.useState<
    { id: string; name: string }[]
  >([]);

  React.useEffect(() => {
    getRicks()
      .then((data) => {
        setApiData(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.seachWrapper}>
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
    </div>
  );
};

export default Seach;
