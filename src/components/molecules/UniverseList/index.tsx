import { universeList } from "../../../constants/universeList";
import { IUniverseListProps } from "../../../interfaces/universeInterfaces";
import UniverseItem from "../UniverseItem";

const UniverseList = () => {
  return (
    <ul>
      {universeList.map((item: IUniverseListProps) => {
        return (
          <UniverseItem
            key={`UniverseItem-${item.name}`}
            img={item.img}
            link={item.link}
          />
        );
      })}
    </ul>
  );
};

export default UniverseList;
