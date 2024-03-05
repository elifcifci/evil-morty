export interface INotificationProps {
  type: "error" | "suscess";
  status: undefined | number;
  text: undefined | string;
  setIsOpenedNotification: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IErrorStateProps {
  message: undefined | string;
  status: undefined | number;
}

export interface IErrorProps {
  error: IErrorStateProps;
}
