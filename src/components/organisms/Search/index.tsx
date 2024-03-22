import React from "react";
import SeachInput from "../../molecules/SearchInput/index";
import List from "../List/index";
import styles from "./search.module.scss";
import { ISearchProps } from "../../../Interfaces/mortyUniverseInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const Seach = ({
  isLoading,
  apiData,
  errorStatus,
  setErrorStatus,
}: ISearchProps) => {
  const [selectedItems, setSelectedItems] = React.useState<
    { id: string; name: string }[]
  >([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
      ulRef.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
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
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      <List
        handleClick={handleClick}
        isLoading={isLoading}
        errorStatus={errorStatus}
        apiData={apiData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
};

export default Seach;
