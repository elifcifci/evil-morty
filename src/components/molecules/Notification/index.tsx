import { XMark } from "../../../../public/icons/XMark";
import {INotificationProps} from "../../../interfaces/erorInterfaces"
import styles from "./styles.module.scss";

const Notification = ({ type, status,  text , setIsOpenedNotification}: INotificationProps) => {
  return (
    <div className={`${styles[`${type}Notification`]}`}>
      <div onClick={() => setIsOpenedNotification(false)}>
        <XMark iconSize="s" />
      </div>
      <div>
        <h1>{status}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Notification;
