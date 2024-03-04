import {IPortalProps} from "../../../interfaces/SearchProps"
import styles from "./styles.module.scss"


const Portal = ({className, imageSize}: IPortalProps) => {
  return (
    <div className={`${styles.portalWrapper} ${className}  ${imageSize ? styles[`${imageSize}SizeImage`] : ""}`}>
      <img src="/images/portal.gif" alt="Portal" />
    </div>
  );
};

export default Portal;