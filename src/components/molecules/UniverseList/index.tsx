import React from "react";
import { universeList } from "../../../constants/universeList";
import {
  IUniverseItem,
  IUniverseListProps,
  IUniverseRef,
} from "../../../Interfaces/landingPageInterfaces";
import UniverseItem from "../UniverseItem";

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
      universeRef.mortyUniverse.current &&
      universeRef.pokemonUniverse.current &&
      universeRef.sailorMoonUniverse.current
    ) {
      const mortyUniverseBounds =
        universeRef.mortyUniverse.current.getBoundingClientRect();

      setUniversePosition([
        {
          id: universeRef.mortyUniverse.current.id,
          top: mortyUniverseBounds.top,
          bottom: mortyUniverseBounds.bottom,
          left: mortyUniverseBounds.left,
          right: mortyUniverseBounds.right,
          link: universeList[0].link,
        },
      ]);
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
