import React from "react";

export interface IUniverseItem {
  id: string;
  img: { src: string; alt: string };
  link: string;
}

export interface IUniverseItemProps {
  referance: React.RefObject<HTMLLIElement>;
  id: string;
  img: { src: string; alt: string };
  link: string;
  isHoverOnUniverse: boolean;
}

export interface IUniversePosition {
  id: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
  link: string;
}

export interface IUniverseListProps {
  setUniversePosition: React.Dispatch<
    React.SetStateAction<IUniversePosition[]>
  >;
  isHoverOnUniverse: boolean;
}

export interface IUniverseRef {
  mortyUniverse: React.RefObject<HTMLLIElement>;
  pokemonUniverse: React.RefObject<HTMLLIElement>;
  sailorMoonUniverse: React.RefObject<HTMLLIElement>;
}

export interface ISpaceShipInfo {
  width: number;
  height: number;
  speed: number;
  movementBoundary: { x: number; y: number };
  initialPosition: number;
}
