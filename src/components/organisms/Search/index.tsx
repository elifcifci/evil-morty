import React from "react";
import SeachItem from "../../molecules/SearchItem/index";
import SeachInput from "../../molecules/SearchInput/index";
import { getRicks } from "../../../api/ricks-api";
import {IAllCharacterProp} from "../../../interfaces/apiInterfaces"
import styles from "./search.module.scss";

const Seach = () => {
  const [value, setValue] = React.useState("");
  const [apiData, setApiData] = React.useState([]);
  const [selectedCharacters, setSelectedCharacters] = React.useState([]);

  React.useEffect(() => {
    getRicks()
      .then((data) => {
        setApiData(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.seachWrapper}>
      <SeachInput value={value} setValue={setValue} />
      <ul className={styles.searchItems}>
        {apiData.map((obj: IAllCharacterProp) => (
          <SeachItem
            key={`${obj.id}-${obj.name}`}
            id={obj.id.toString()}
            name={obj.name}
            image={obj.image}
            episodes={obj.episode.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default Seach;