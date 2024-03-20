import { IUniverseItemProps } from "../../../interfaces/universeInterfaces";
import Portal from "../../atoms/Portal";
import styles from "./styles.module.scss";

const UniverseItem = ({
  referance,
  isHoverOnUniverse,
  img,
  link,
  id,
}: IUniverseItemProps) => {

  return (
    <li
      ref={referance}
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
      <Portal imageSize="l" />
    </li>
  );
};

export default UniverseItem;
