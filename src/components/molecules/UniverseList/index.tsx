import React from "react";
import { universeList } from "../../../constants/universeList";
import {
  IUniverseItem,
  IUniverseListProps,
  IUniverseRef,
} from "../../../interfaces/universeInterfaces";
import UniverseItem from "../UniverseItem";
import { getUniverseBounding } from "../../../utils/getUniverseBounding";

const UniverseList = ({
  isHoverOnUniverse,
  setUniversePosition,
}: IUniverseListProps) => {

  const universeRef: IUniverseRef = {
    mortyUniverse: React.useRef<HTMLLIElement>(null),
    pokemonUniverse: React.useRef<HTMLLIElement>(null),
    sailorMoonUniverse: React.useRef<HTMLLIElement>(null),
  };
  
  React.useEffect(() => {
    if (
      universeRef.mortyUniverse.current !== null &&
      universeRef.pokemonUniverse.current !== null &&
      universeRef.sailorMoonUniverse.current !== null
    ) {

      setUniversePosition(
        Object.keys(universeRef).map((universe) =>
          getUniverseBounding(universeRef[universe])
        )
      );
    }
  }, [
    universeRef.mortyUniverse.current,
    universeRef.pokemonUniverse.current,
    universeRef.sailorMoonUniverse.current,
  ]);

  return (
    <ul>
      {universeList.map((item: IUniverseItem) => {
        return (
          <UniverseItem
            referance={
              item.id === "universe-rick-and-morty"
                ? universeRef.mortyUniverse
                : item.id === "universe-pokemon"
                ? universeRef.pokemonUniverse
                : universeRef.sailorMoonUniverse
            }
            isHoverOnUniverse={isHoverOnUniverse}
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
