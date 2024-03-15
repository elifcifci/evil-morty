import React from "react";
import { IUniverseItemProps } from "../../../interfaces/universeInterfaces";
import Portal from "../../atoms/Portal";
import { universeList } from "../../../constants/universeList";
import styles from "./styles.module.scss";

const UniverseItem = ({
  isHoverOnUniverse,
  setUniversePosition,
  img,
  link,
  id,
}: IUniverseItemProps) => {
  const mortyUniverse = React.useRef<HTMLLIElement>(null);
  const pokemonUniverse = React.useRef<HTMLLIElement>(null);
  const sailorMoonUniverse = React.useRef<HTMLLIElement>(null);

  //TODO: REFACTOR HERE
  React.useEffect(() => {
    const universeBoundings = [
      mortyUniverse.current?.getBoundingClientRect(),
      pokemonUniverse.current?.getBoundingClientRect(),
      sailorMoonUniverse.current?.getBoundingClientRect(),
    ];

    const mortyUniverseBounding = {
      id: mortyUniverse.current?.id,
      top: universeBoundings[0]?.top,
      bottom: universeBoundings[0]?.bottom,
      left: universeBoundings[0]?.left,
      right: universeBoundings[0]?.right,
      link: universeList.find((item) => item.id === mortyUniverse.current?.id)
        ?.link,
    };

    const pokemonUniverseBounding = {
      id: pokemonUniverse.current?.id,
      top: universeBoundings[1]?.top,
      bottom: universeBoundings[1]?.bottom,
      left: universeBoundings[1]?.left,
      right: universeBoundings[1]?.right,
      link: universeList.find((item) => item.id === pokemonUniverse.current?.id)
        ?.link,
    };

    const sailorMoonUniverseBounding = {
      id: sailorMoonUniverse.current?.id,
      top: universeBoundings[2]?.top,
      bottom: universeBoundings[2]?.bottom,
      left: universeBoundings[2]?.left,
      right: universeBoundings[2]?.right,
      link: universeList.find((item) => item.id === sailorMoonUniverse.current?.id)
        ?.link,
    };

    // setUniversePosition((prev) => {
    //   if( prev[0].id !== mortyUniverseBounding.id) {
    //     return [
    //       mortyUniverseBounding,
    //       pokemonUniverseBounding,
    //       sailorMoonUniverseBounding,
    //     ]
    //   }
    //   })

    }, [mortyUniverse, pokemonUniverse, sailorMoonUniverse]);
  

  return (
    <li
      ref={
        id === "universe-rick-and-morty"
          ? mortyUniverse
          : id === "universe-pokemon"
          ? pokemonUniverse
          : sailorMoonUniverse
      }
      id={id}
      className={`anchorParent ${styles.itemWrapper} ${
        link ? "" : styles.disableUniverse
      } ${
        isHoverOnUniverse && id === "universe-rick-and-morty"
          ? styles.reachedUniverse
          : ""
      }`}
    >
      {link ? (
        <a href={link} />
      ) : (
        <p role="universe-coming-soon">COMING SOON</p>
      )}
      <img role="universe-type" src={img.src} alt={img.alt} />
      <Portal className={styles.portal} imageSize="l" />
    </li>
  );
};

export default UniverseItem;
