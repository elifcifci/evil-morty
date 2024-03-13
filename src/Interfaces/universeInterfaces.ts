export interface IUniverseListProps {
  isReachedUniverse: boolean;
}

export interface IUniverseItem {
  id: string;
  img: { src: string; alt: string };
  link: string;
}

export interface IUniverseItemProps {
  id: string;
  img: { src: string; alt: string };
  link: string;
  isReachedUniverse: boolean;
}

export interface IUniverseProps {
  left: number;
  right: number;
  top: number;
  bottom: number;
  height: number;
  width: number;
  x: number;
  y: number;
  link: string;
}

export interface ISpaceShipInfo {
  width: number;
  height: number;
  speed: number;
  movementBoundary: { x: number; y: number };
  initialPosition: number;
}
