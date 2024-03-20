import { NavigateFunction } from "react-router-dom";
import {
  ISpaceShipInfo,
  IUniversePosition,
} from "../Interfaces/landingPageInterfaces";
import { chooseSpaceshipPosition } from "./chooseSpaceshipPosition";

export const handleKeyPressWithDelay = (
  height: number,
  universePosition: IUniversePosition[],
  setItemPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number; isReached: boolean }>
  >,
  setIsShaking: React.Dispatch<React.SetStateAction<boolean>>,
  key: string,
  spaceShip: ISpaceShipInfo,
  setIsHoverOnUniverse: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {

  const condition = (x: number, y: number) => {
    return (
      x >= universePosition[0].left &&
      x + spaceShip.width - 40 <= universePosition[0].right &&
      height - y >= universePosition[0].top &&
      height - y - spaceShip.height < universePosition[0].bottom
    );
  };

  setTimeout(() => {
    if (universePosition.length > 0) {
      if (key === "w" || key === "arrowup") {
        setItemPosition(
          (prev: { x: number; y: number; isReached: boolean }) => {
            if (condition(prev.x, prev.y)) {
              setIsHoverOnUniverse(true);
            } else {
              setIsHoverOnUniverse(false);
            }

            return {
              ...prev,
              isReached: false,
              y: chooseSpaceshipPosition(
                prev.y,
                spaceShip.movementBoundary.y,
                spaceShip.speed,
                setIsShaking,
                spaceShip.initialPosition
              ),
            };
          }
        );
      } else if (key === "s" || key === "arrowdown") {
        setItemPosition(
          (prev: { x: number; y: number; isReached: boolean }) => {
            if (condition(prev.x, prev.y)) {
              setIsHoverOnUniverse(true);
            } else {
              setIsHoverOnUniverse(false);
            }
            return {
              ...prev,
              isReached: false,
              y: chooseSpaceshipPosition(
                prev.y,
                spaceShip.movementBoundary.y,
                -spaceShip.speed,
                setIsShaking,
                spaceShip.initialPosition
              ),
            };
          }
        );
      } else if (key === "d" || key === "arrowright") {
        setItemPosition(
          (prev: { x: number; y: number; isReached: boolean }) => {
            if (condition(prev.x, prev.y)) {
              setIsHoverOnUniverse(true);
            } else {
              setIsHoverOnUniverse(false);
            }
            return {
              ...prev,
              isReached: false,
              x: chooseSpaceshipPosition(
                prev.x,
                spaceShip.movementBoundary.x,
                spaceShip.speed,
                setIsShaking,
                spaceShip.initialPosition
              ),
            };
          }
        );
      } else if (key === "a" || key === "arrowleft") {
        setItemPosition(
          (prev: { x: number; y: number; isReached: boolean }) => {
            if (condition(prev.x, prev.y)) {
              setIsHoverOnUniverse(true);
            } else {
              setIsHoverOnUniverse(false);
            }
            return {
              ...prev,
              isReached: false,
              x: chooseSpaceshipPosition(
                prev.x,
                spaceShip.movementBoundary.x,
                -spaceShip.speed,
                setIsShaking,
                spaceShip.initialPosition
              ),
            };
          }
        );
      } else if (key === "enter") {
        setItemPosition(
          (prev: { x: number; y: number; isReached: boolean }) => {
            // prev.y gives distance from page bottom. For comparison we should find distance top between the item and the page top
            if (condition(prev.x, prev.y)) {
              setIsHoverOnUniverse(false);
              navigate(universePosition[0].link);
            }
            return { ...prev, isReached: true };
          }
        );
      }
    }
  }, 300);
};
