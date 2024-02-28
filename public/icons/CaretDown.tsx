import {IIconProps} from "../../src/Interfaces/iconInterfaces"
import styles from "../../src/styles/iconStyles.module.scss";

export const CaretDown = ({ className, iconSize, primary, secondary, tertiary, evilThema }: IIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 512"
    className={`${className} ${iconSize ? styles[`${iconSize}SizeIcon`] : ""} 
    ${primary ? styles.primaryIcon : secondary ? styles.secondaryIcon : tertiary ? styles.tertiaryIcon : evilThema ? styles.evilThema :""}`}
  >
    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
  </svg>
);