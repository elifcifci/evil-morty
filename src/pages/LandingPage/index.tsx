import React from "react";
import { useNavigate } from "react-router-dom";
import SpaceShip from "../../components/atoms/SpaceShip";
import Keyboard from "../../components/molecules/Keyboard";
import UniverseList from "../../components/molecules/UniverseList";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { keyboardList } from "../../constants/keyboard";
import { handleKeyPressWithDelay } from "../../utils/handleKeyPressWithDelay";
import styles from "./styles.module.scss";

const LandingPage = ({}) => {
  const navigate = useNavigate();
  const spaceShipRef = React.useRef<HTMLDivElement>(null);
  const { height, width } = useWindowDimensions();
  const spaceShip = {
    width: spaceShipRef.current?.scrollWidth ?? 200,
    height: spaceShipRef.current?.scrollHeight ?? 114,
    speed: 10,
    movementBoundary: {
      // -20 is for page padding
      x: width - (spaceShipRef.current?.scrollWidth ?? 220) - 20,
      y: height - (spaceShipRef.current?.scrollWidth ?? 114) - 20,
    },
    initialPosition: 20,
  };

  const [itemPosition, setItemPosition] = React.useState({
    x: spaceShip.initialPosition,
    y: spaceShip.initialPosition,
    isReached: false,
  });
  const [isShaking, setIsShaking] = React.useState(true);
  const [selectedKey, setSelectedKey] = React.useState(true);
  const [universePosition, setuniversePosition] = React.useState<DOMRect>();

  React.useEffect(() => {
    if (document.getElementById("universe-rick-and-morty")) {
      setuniversePosition(
        document
          .getElementById("universe-rick-and-morty")
          ?.getBoundingClientRect()
      );
    }
  }, [document.getElementById("universe-rick-and-morty")]);

  React.useEffect(() => {
    // selectedKey remove when user key up
    const keyupListener = () => {
      document.addEventListener("keyup", () => {
        setSelectedKey("");
      });
    };

    // movement request gets and position state update
    const keydownListener = () =>
      document.addEventListener("keydown", (e: any) => {
        const key = e.key.toLocaleLowerCase();
        if (
          (keyboardList.letters.includes(key) ||
            keyboardList.arrows.includes(key) ||
            key === "enter") &&
          selectedKey != key
        ) {
          setSelectedKey(key);
        }

        handleKeyPressWithDelay(
          height,
          universePosition,
          setItemPosition,
          setIsShaking,
          key,
          spaceShip
        );
      });

    keyupListener();
    keydownListener();

    return () => {
      // Cleanup functions:
      document.removeEventListener("keyup", keyupListener);
      document.removeEventListener("keydown", keydownListener);
    };
  }, []);

  return (
    <div className={`pageWrapper ${styles.mainPageContainer}`}>
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
      <UniverseList isReachedUniverse={itemPosition.isReached} />
      <Keyboard selectedKey={selectedKey} className={styles.keyboard} />
    </div>
  );
};

export default LandingPage;
