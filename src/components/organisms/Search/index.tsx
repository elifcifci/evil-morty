import React from "react";
import SeachItem from "../../molecules/SearchItem/index";
import SeachInput from "../../molecules/SearchInput/index";
import { getRicks } from "../../../api/ricks-api";
import { IAllCharacterProp } from "../../../interfaces/apiInterfaces";
import {quotesFromMorty} from "../../../constants/quotesFromMorty";
import styles from "./search.module.scss";

const Seach = () => {
  const [value, setValue] = React.useState("");
  const [apiData, setApiData] = React.useState([]);
  const [selectedCharacters, setSelectedCharacters] = React.useState([]);
  const [isEvilMode, setIsEvilMode] = React.useState(false);

  React.useEffect(() => {
    getRicks()
      .then((data) => {
        setApiData(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredList = apiData.filter((obj: IAllCharacterProp) =>
    obj.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={styles.seachWrapper}>
      <SeachInput value={value} setValue={setValue} />
      <ul className={styles.searchItems}>
        {filteredList.length === 0 ? (
          <li className={styles.quote}>
            {isEvilMode ? quotesFromMorty[0] : "Please, listen to Evil morty!"}
          </li>
        ) : (
          filteredList.map((obj: IAllCharacterProp) => {
            return (
              <SeachItem
                key={`${obj.id}-${obj.name}`}
                inputValue={value}
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

export default Seach;
