import { useNavigate } from "react-router-dom";
import { IUniverseItemProps } from "../../../Interfaces/landingPageInterfaces";
import Portal from "../../atoms/Portal";
import styles from "./styles.module.scss";

const UniverseItem = ({
  referance,
  isHoverOnUniverse,
  img,
  link,
  id,
}: IUniverseItemProps) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        if (link) {
          navigate(link);
        }
      }}
      ref={referance}
      id={id}
      className={`${styles.itemWrapper} ${
        link ? "" : styles.disableUniverse
      } ${
        isHoverOnUniverse && id === "universe-rick-and-morty"
          ? styles.reachedUniverse
          : ""
      }`}
    >
      {link && <p role="universe-coming-soon">COMING SOON</p>}
      <img role="universe-type" src={img.src} alt={img.alt} />
      <Portal imageSize="l" />
    </li>
  );
};

export default UniverseItem;
