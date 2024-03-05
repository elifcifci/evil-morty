import React from "react";
import { IAllCharacterProp } from "./apiInterfaces";
import { IErrorStateProps } from "./erorInterfaces";

export interface ISelectedListProps {
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachItemProps {
  id: string;
  value: string;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachListItemProps {
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
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListProps {
  apiData: IAllCharacterProp[];
  inputValue: string;
  isEvilMode: boolean;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
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

export interface ISearchProps {
  isEvilMode: boolean;
  error:IErrorStateProps;
  apiData: IAllCharacterProp[];
}