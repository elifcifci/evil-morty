import React from "react";

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
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface ISeachInputProps {
  ulRef: React.RefObject<HTMLUListElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListProps {
  handleClick: () => void;
  selectedItems: { id: string; name: string }[];
  setSelectedItems: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >;
}

export interface IListItemInfoProps {
  name: string;
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