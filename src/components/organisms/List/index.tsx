import ListItem from "../../molecules/ListItem/index";
import { IListProps } from "../../../interfaces/SearchProps";
import { IAllCharacterProp } from "../../../interfaces/apiInterfaces";
import Loading from "../../../../public/icons/Loading";
import styles from "./styles.module.scss";
import ErrorText from "../../molecules/ErrorText";

const List = ({
  isLoading,
  errorStatus,
  apiData,
  inputValue,
  isEvilMode,
  selectedItems,
  setSelectedItems,
}: IListProps) => {
  return (
    <div
      className={`${styles.listWrapper} ${
        !!errorStatus ? styles.errorTheme : ""
      } ${isEvilMode ? styles.evilTheme : ""}`}
    >
      {errorStatus ? (
        <ErrorText errorStatus={errorStatus} />
      ) : isLoading ? (
        <div className={styles.loadingWrapper}>
          <Loading />
        </div>
      ) : (
        <ul className={styles.searchItems}>
          {apiData === undefined ? (
            <div className={styles.loadingWrapper}>
              <Loading />
            </div>
          ) : (
            apiData?.map((obj: IAllCharacterProp) => {
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
      )}
    </div>
  );
};
export default List;
