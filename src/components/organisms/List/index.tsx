import ListItem from "../../molecules/ListItem/index";
import { IListProps } from "../../../interfaces/SearchProps";
import { IAllCharacterProp } from "../../../interfaces/apiInterfaces";
import { quotesFromMorty } from "../../../constants/quotesFromMorty";
import Loading from "../../../../public/icons/Loading";
import styles from "./styles.module.scss";

const List = ({
  apiData,
  inputValue,
  isEvilMode,
  selectedItems,
  setSelectedItems,
}: IListProps) => {
  const filteredList = apiData?.filter((obj: IAllCharacterProp) =>
    obj.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <ul className={styles.searchItems}>
      {/* loading state controls here. if we have apiData, we can reach the filteredList. */}
      {apiData === undefined ? (
        <Loading />
      ) : filteredList?.length === 0 ? (
        <li className={styles.quote}>
          {isEvilMode ? quotesFromMorty[0] : "Please, listen to Evil morty!"}
        </li>
      ) : (
        filteredList?.map((obj: IAllCharacterProp) => {
          return (
            <ListItem
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
  );
};
export default List;
