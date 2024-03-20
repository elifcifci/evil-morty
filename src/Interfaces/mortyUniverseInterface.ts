import React from "react";
import { IAllCharacterProp } from "./apiInterfaces.ts";
import { IErrorStatus } from "./erorInterfaces.ts";

export interface mortyUniverseInterface {
  isEvilMode: boolean;
  setIsEvilMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISelectedListProps {
  isEvilMode: boolean;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISelectedItemProps {
  isEvilMode: boolean;
  id: string;
  value: string;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachListItemProps {
  handleClick: () => void;
  isEvilMode: boolean;
  id: string;
  episodes: number;
  name: string;
  image: string;
  inputValue: string;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachInputProps {
  ulRef: React.RefObject<HTMLUListElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  setErrorStatus: React.Dispatch<
    React.SetStateAction<undefined | number | boolean>
  >;
  isEvilMode: boolean;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListProps {
  handleClick: () => void;
  isLoading: boolean;
  errorStatus: undefined | boolean | number;
  apiData: undefined | IAllCharacterProp[];
  inputValue: string;
  isEvilMode: boolean;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListItemInfoProps {
  isEvilMode: boolean;
  name: string;
  inputValue: string;
  episodes: number;
  image: string;
}

export interface IPortalProps {
  isEvilMode?: boolean;
  imgType?: "png" | "gif";
  className?: string;
  imageSize: "xs" | "s" | "m" | "l";
}

export interface ISpaceShipProps {
  className?: string;
  imageSize: "s" | "m" | "l";
  style: { left: number; bottom: number };
  spaceShipRef: React.RefObject<HTMLDivElement>;
}

export interface ISearchProps {
  isLoading: boolean;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isEvilMode: boolean;
  errorStatus: IErrorStatus;
  setErrorStatus: React.Dispatch<
    React.SetStateAction<undefined | number | boolean>
  >;
  apiData: undefined | IAllCharacterProp[];
}

export interface IThemeButtonProps {
  isEvilMode: boolean;
  setIsEvilMode: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
