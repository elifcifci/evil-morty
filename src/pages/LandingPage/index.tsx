import React from "react";
import SpaceShip from "../../components/atoms/SpaceShip";
import Keyboard from "../../components/molecules/Keyboard";
import UniverseList from "../../components/molecules/UniverseList";
import styles from "./styles.module.scss";
import useWindowDimensions from "../../utils/useWindowDimensions";

const LandingPage = ({}) => {
  const constraintsRef = React.useRef(null);
  const spaceShipRef = React.useRef<HTMLDivElement>(null);
  const { height, width } = useWindowDimensions();
  const spaceShip = {
    width: spaceShipRef.current?.scrollWidth,
    height: spaceShipRef.current?.scrollHeight,
    speed: 5,
    movementBoundary: {
      // -20 is for page padding
      x: width - (spaceShipRef.current?.scrollWidth ?? 220) - 20,
      y: height - (spaceShipRef.current?.scrollWidth ?? 110) - 20,
    },
    initialPosition: 20,
  };

  const [itemPosition, setItemPosition] = React.useState({
    x: spaceShip.initialPosition,
    y: spaceShip.initialPosition,
  });
  const [isShaking, setIsShaking] = React.useState(true);

  const chooseValue = (position: number, boundary: number, speed: number) => {
    let result =
      speed > 0
        ? position < boundary
          ? position + speed
          : position
        : position > spaceShip.initialPosition
        ? position + speed
        : position;

    if (position === result) {
      setIsShaking(true);
    } else {
      setIsShaking(false);
    }

    return result;
  };

  React.useEffect(() => {
    const keydownListener = () =>
      document.addEventListener("keydown", (e: any) => {
        const key = e.key.toLocaleLowerCase();
        // setTimeout(() => {
          if (key === "w" || key === "arrowup") {
            setItemPosition((prev) => {
              return {
                ...prev,
                y: chooseValue(
                  prev.y,
                  spaceShip.movementBoundary.y,
                  spaceShip.speed
                ),
              };
            });
          } else if (key === "s" || key === "arrowdown") {
            setItemPosition((prev) => {
              return {
                ...prev,
                y: chooseValue(
                  prev.y,
                  spaceShip.movementBoundary.y,
                  -spaceShip.speed
                ),
              };
            });
          } else if (key === "d" || key === "arrowright") {
            setItemPosition((prev) => {
              return {
                ...prev,
                x: chooseValue(
                  prev.x,
                  spaceShip.movementBoundary.x,
                  spaceShip.speed
                ),
              };
            });
          } else if (key === "a" || key === "arrowleft") {
            setItemPosition((prev) => {
              return {
                ...prev,
                x: chooseValue(
                  prev.x,
                  spaceShip.movementBoundary.x,
                  -spaceShip.speed
                ),
              };
            });
          }
        // }, 300);
      });

    keydownListener();
    return () => {
      // Cleanup function:
      document.removeEventListener("keydown", keydownListener);
    };
  }, []);

  return (
    <div
      id="droppableArea"
      ref={constraintsRef}
      className={`pageWrapper ${styles.mainPageContainer}`}
    >
      <div className={styles.pageTitleAndDescription}>
        <h1>Drive the Space Cruiser!</h1>
        <p>Use the directional keys to travel to different universes.</p>
      </div>

      <SpaceShip
        style={{ left: itemPosition.x, bottom: itemPosition.y }}
        className={`${styles.spaceShipWrapper} ${
          isShaking ? styles.shakingSpaceship : ""
        }`}
        imageSize="l"
        spaceShipRef={spaceShipRef}
      />
      <UniverseList />
      <Keyboard className={styles.keyboard} />
    </div>
  );
};

export default LandingPage;
