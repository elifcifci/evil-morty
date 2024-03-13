import { universeList } from "../../../constants/universeList";
import {
  IUniverseItem,
  IUniverseListProps,
} from "../../../interfaces/universeInterfaces";
import UniverseItem from "../UniverseItem";

const UniverseList = ({ isReachedUniverse }: IUniverseListProps) => {
  return (
    <ul>
      {universeList.map((item: IUniverseItem) => {
        return (
          <UniverseItem
            isReachedUniverse={isReachedUniverse}
            id={item.id}
            key={item.id}
            img={item.img}
            link={item.link}
          />
        );
      })}
    </ul>
  );
};

export default UniverseList;
