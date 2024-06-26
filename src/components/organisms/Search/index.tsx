import React from "react";
import SeachInput from "../../molecules/SearchInput/index";
import List from "../List/index";
import styles from "./search.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const Seach = () => {
  const [selectedItems, setSelectedItems] = React.useState<
    { id: string; name: string }[]
  >([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  const handleClick = () => {
    if (ulRef.current !== null) {
      ulRef.current.scroll({
        top: 1000,
        behavior: "smooth"
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
            : "Uh, W-what should I write?"}
        </h1>

        <SeachInput
          ulRef={ulRef}
          inputRef={inputRef}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      <List
        handleClick={handleClick}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
};

export default Seach;
