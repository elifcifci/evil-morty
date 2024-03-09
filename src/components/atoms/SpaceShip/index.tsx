import {IPortalProps} from "../../../interfaces/SearchProps"
import styles from "./styles.module.scss"


const SpaceShip = ({className, imageSize}: IPortalProps) => {
  return (
    <div className={`${styles.spaceshipWrapper} ${className} ${imageSize ? styles[`${imageSize}SizeImage`] : ""}`}>
      <img src="/images/spaceship.png" alt="Portal" />
    </div>
  );
};

export default SpaceShip;