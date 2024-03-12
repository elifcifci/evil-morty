import React from "react";
import { IAllCharacterProp } from "./apiInterfaces";
import { IErrorStateProps } from "./erorInterfaces";

export interface ISelectedListProps {
  isEvilMode: boolean;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachItemProps {
  isEvilMode: boolean;
  id: string;
  value: string;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachListItemProps {
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
  isEvilMode: boolean;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListProps {
  apiData: undefined | IAllCharacterProp[];
  inputValue: string;
  isEvilMode: boolean;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
  notFountText: string | undefined;
  setNotFountText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface IListItemInfoProps {
  id: string;
  name: string;
  inputValue: string;
  episodes: number;
  image: string;
}

export interface IPortalProps {
  className?: string;
  imageSize: "s" | "m" | "l";
}

export interface ISpaceShipProps {
  className?: string;
  imageSize: "s" | "m" | "l";
  style: { left: number; bottom: number };
  spaceShipRef: React.RefObject<HTMLDivElement>;
}

export interface ISearchProps {
  isEvilMode: boolean;
  error: IErrorStateProps;
  apiData: undefined | IAllCharacterProp[];
  notFountText: string | undefined;
  setNotFountText: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface IEvilMortyThemaProps {
  isEvilMode: boolean;
  setIsEvilMode: React.Dispatch<React.SetStateAction<boolean>>;
  setNotFountText: React.Dispatch<React.SetStateAction<string | undefined>>;
}
