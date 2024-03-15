import { universeList } from "../../../constants/universeList";
import {
  IUniverseItem,
  IUniverseListProps,
} from "../../../interfaces/universeInterfaces";
import UniverseItem from "../UniverseItem";

const UniverseList = ({
  isHoverOnUniverse,
  setUniversePosition,
}: IUniverseListProps) => {
  return (
    <ul>
      {universeList.map((item: IUniverseItem) => {
        return (
          <UniverseItem
            isHoverOnUniverse={isHoverOnUniverse}
            setUniversePosition={setUniversePosition}
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
