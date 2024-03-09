import { IUniverseItemProps } from "../../../interfaces/universeInterfaces";
import Portal from "../../atoms/Portal";
import styles from "./styles.module.scss";

const UniverseItem = ({ img, link }: IUniverseItemProps) => {
  return (
    <li className={`anchorParent ${styles.itemWrapper}`}>
      <a href={link} />
      {img.src ? (
        <img role="universe-type" src={img.src} alt={img.alt} />
      ) : (
        <p role="universe-coming-soon">COMING SOON</p>
      )}
      <Portal className={styles.portal} imageSize="l" />
    </li>
  );
};

export default UniverseItem;
