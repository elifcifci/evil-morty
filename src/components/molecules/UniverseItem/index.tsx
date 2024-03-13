import { IUniverseItemProps } from "../../../interfaces/universeInterfaces";
import Portal from "../../atoms/Portal";
import styles from "./styles.module.scss";

const UniverseItem = ({
  isReachedUniverse,
  img,
  link,
  id,
}: IUniverseItemProps) => {
  return (
    <li
      id={id}
      className={`anchorParent ${styles.itemWrapper} ${
        link ? "" : styles.disableUniverse
      } ${
        isReachedUniverse && id === "universe-rick-and-morty"
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
