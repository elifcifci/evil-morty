import React from "react";
import { IAllCharacterProp } from "./apiInterfaces.ts";
import { IErrorStatus } from "./erorInterfaces.ts";

export interface ISelectedListProps {
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISelectedItemProps {
  id: string;
  value: string;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachListItemProps {
  handleClick: () => void;
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
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListItemInfoProps {
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
  errorStatus: IErrorStatus;
  setErrorStatus: React.Dispatch<
    React.SetStateAction<undefined | number | boolean>
  >;
  apiData: undefined | IAllCharacterProp[];
}

export interface IThemeButtonProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
