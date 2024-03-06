import React from "react";

export interface ILandingPageProps {
  isEvilMode: boolean;
  isOpenedNotification: boolean;
  setIsOpenedNotification: React.Dispatch<React.SetStateAction<boolean>>;
}
