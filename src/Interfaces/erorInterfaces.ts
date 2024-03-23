export interface INotificationProps {
  type: "error" | "suscess";
  status: undefined | string;
  text: undefined | string;
  setIsOpenedNotification: React.Dispatch<React.SetStateAction<boolean>>
}