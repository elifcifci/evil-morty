import ListItem from "../../molecules/ListItem/index";
import Loading from "../../../../public/icons/Loading";
import styles from "./styles.module.scss";
import ErrorText from "../../molecules/ErrorText";
import { IListProps } from "../../../Interfaces/mortyUniverseInterface";
import { IAllCharacterProp } from "../../../Interfaces/apiInterfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const List = ({
  handleClick,
  isLoading,
  errorStatus,
  apiData,
  selectedItems,
  setSelectedItems,
}: IListProps) => {
  const isEvilMode = useSelector((state: RootState) => state.theme.isEvilMode);

  return (
    <div
      className={`${styles.listWrapper} ${isEvilMode ? styles.evilTheme : ""}`}
    >
      {errorStatus ? (
        <ErrorText errorStatus={errorStatus} />
      ) : isLoading ? (
        <div className={styles.loadingWrapper}>
          <Loading />
        </div>
      ) : (
        <ul className={styles.searchItems}>
          {apiData === undefined || isLoading ? (
            <div className={styles.loadingWrapper}>
              <Loading />
            </div>
          ) : (
            apiData?.map((obj: IAllCharacterProp) => {
              return (
                <ListItem
                  handleClick={handleClick}
                  key={`${obj.id}-${obj.name}`}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
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
