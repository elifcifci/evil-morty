import {
  ISpaceShipInfo,
  IUniversePosition,
} from "../interfaces/universeInterfaces";
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
) => {
  setTimeout(() => {
    if (key === "w" || key === "arrowup") {
      setItemPosition((prev: { x: number; y: number; isReached: boolean }) => {
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
      });
    } else if (key === "s" || key === "arrowdown") {
      setItemPosition((prev: { x: number; y: number; isReached: boolean }) => {
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
      });
    } else if (key === "d" || key === "arrowright") {
      setItemPosition((prev: { x: number; y: number; isReached: boolean }) => {
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
      });
    } else if (key === "a" || key === "arrowleft") {
      setItemPosition((prev: { x: number; y: number; isReached: boolean }) => {
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
      });
    } else if (key === "enter" && universePosition.length > 0) {
      
      setItemPosition((prev: { x: number; y: number; isReached: boolean }) => {
        console.log("prev y",height - prev.y);

        // prev.y gives distance from page bottom. For comparison we should find distance top between the item and the page top
        if (
          universePosition[0]?.top &&
          universePosition[0]?.bottom &&
          // prev.x >= universe.left
          // spaceShipRef.current.offsetLeft <= universe.right &&
          height - prev.y + spaceShip.height >= universePosition[0]?.top 
          // height - prev.y <= universePosition.bottom
        ) {
        // console.log("test1", universePosition?.top + spaceShip.height, height - prev.y);
          console.log("BAŞŞARILI");
          // navigate(universePosition.link);
        }
        return { ...prev, isReached: true };
      });
    }
  }, 300);
};
