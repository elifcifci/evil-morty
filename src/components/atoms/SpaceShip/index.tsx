import { ISpaceShipProps } from "../../../Interfaces/mortyUniverseInterface";
import styles from "./styles.module.scss";

const SpaceShip = ({
  className,
  imageSize,
  style,
  spaceShipRef,
}: ISpaceShipProps) => {
  return (
    <div
      style={{ ...style }}
      ref={spaceShipRef}
      tabIndex={0}
      draggable
      className={`${styles.spaceshipWrapper} ${className} ${
        imageSize ? styles[`${imageSize}SizeImage`] : ""
      }`}
    >
      <img src="/images/spaceship.png" alt="Spaceship" />
    </div>
  );
};

export default SpaceShip;
