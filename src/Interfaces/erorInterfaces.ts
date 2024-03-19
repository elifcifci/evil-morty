export interface INotificationProps {
  type: "error" | "suscess";
  status: undefined | number | boolean;
  text: undefined | string;
  setIsOpenedNotification: React.Dispatch<React.SetStateAction<boolean>>
}

export type IErrorStatus = undefined | number | boolean;

export interface IErrorProps {
  errorStatus: IErrorStatus;
}
