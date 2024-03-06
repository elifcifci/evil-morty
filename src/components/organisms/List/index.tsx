import React, { useEffect } from "react";
import ListItem from "../../molecules/ListItem/index";
import { IListProps } from "../../../interfaces/SearchProps";
import { IAllCharacterProp } from "../../../interfaces/apiInterfaces";
import { quotesFromMorty } from "../../../constants/quotesFromMorty";
import { posibleAnswersFromRick } from "../../../constants/posibleAnswersFromRick";
import Loading from "../../../../public/icons/Loading";
import styles from "./styles.module.scss";

const List = ({
  apiData,
  inputValue,
  isEvilMode,
  selectedItems,
  setSelectedItems,
  notFountText,
  setNotFountText,
}: IListProps) => {
  const filteredList = apiData?.filter((obj: IAllCharacterProp) =>
    obj.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const getRandomText = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  React.useEffect(() => {
    if (filteredList?.length === 0) {
      setTimeout(() => {
        setNotFountText(
          isEvilMode
            ? getRandomText(quotesFromMorty)
            : getRandomText(posibleAnswersFromRick)
        );
      }, 500);
    }
  }, [isEvilMode, filteredList?.length]);

  return (
    <div
      className={`${styles.listWrapper} ${isEvilMode ? styles.evilTheme : ""}`}
    >
      <ul className={styles.searchItems}>
        {/* loading state controls here. if we have apiData, we can reach the filteredList. */}
        {apiData === undefined ? (
          <div className={styles.loadingWrapper}>
            <Loading />
          </div>
        ) : filteredList?.length === 0 ? (
          <li className={styles.quote}>{notFountText ?? <Loading />}</li>
        ) : (
          filteredList?.map((obj: IAllCharacterProp) => {
            return (
              <ListItem
                isEvilMode={isEvilMode}
                key={`${obj.id}-${obj.name}`}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                inputValue={inputValue}
                id={obj.id.toString()}
                name={obj.name.trim()}
                image={obj.image}
                episodes={obj.episode.length}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};
export default List;
