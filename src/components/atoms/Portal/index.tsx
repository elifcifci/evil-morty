import { IPortalProps } from "../../../Interfaces/mortyUniverseInterface";
import styles from "./styles.module.scss";

const Portal = ({
  imgType = "gif",
  className,
  imageSize,
  isEvilMode = false,
}: IPortalProps) => {
  return (
    <div
      className={`${styles.portalWrapper} ${className}
       ${imageSize ? styles[`${imageSize}SizeImage`] : ""}`}
    >
      <img
        src={
          imgType === "gif" ? "/images/portal.gif" : isEvilMode ? "/images/yellow-portal.png" : "/images/green-portal.png"
        }
        alt="Portal"
      />
    </div>
  );
};

export default Portal;
