import React from "react";
import { useNavigate } from "react-router-dom";
import SpaceShip from "../../components/atoms/SpaceShip";
import Keyboard from "../../components/molecules/Keyboard";
import UniverseList from "../../components/molecules/UniverseList";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { keyboardList } from "../../constants/keyboard";
import { IUniversePosition } from "../../Interfaces/landingPageInterfaces";
import { handleKeyPressWithDelay } from "../../utils/handleKeyPressWithDelay";
import styles from "./styles.module.scss";

const LandingPage = ({}) => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const spaceShipRef = React.useRef<HTMLDivElement>(null);
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
  const [selectedKey, setSelectedKey] = React.useState("");
  const [universePosition, setUniversePosition] = React.useState<
    IUniversePosition[]
  >([]);
  const [isHoverOnUniverse, setIsHoverOnUniverse] = React.useState(false);

  React.useEffect(() => {
    // selectedKey remove when user key up
    const keyupListener = () => {
      document.addEventListener("keyup", () => {
        setSelectedKey("");
        document.removeEventListener("keydown", keydownListener);
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
          spaceShip,
          setIsHoverOnUniverse,
          navigate
        );
      });

    keyupListener();
    keydownListener();

    return () => {
      // Cleanup functions:
      document.removeEventListener("keyup", keyupListener);
      document.removeEventListener("keydown", keydownListener);
    };
  }, [universePosition]);

  return (
    <div className={`pageWrapper ${styles.mainPageContainer}`}>
      <div className={styles.pageTitleAndDescription}>
        <h1>
          {width >= 1024
            ? "Drive the Space Cruiser!"
            : "Discover a new Universe!"}
        </h1>
        <p>Use the directional keys to travel to different universes.</p>
      </div>

      <SpaceShip
        style={{ left: itemPosition.x, bottom: itemPosition.y }}
        className={`${styles.spaceShipWrapper} ${
          isShaking ? styles.shakingSpaceship : ""
        }`}
        imageSize="m"
        spaceShipRef={spaceShipRef}
      />
      <UniverseList
        isHoverOnUniverse={isHoverOnUniverse}
        setUniversePosition={setUniversePosition}
      />
      <Keyboard selectedKey={selectedKey} className={styles.keyboard} />
    </div>
  );
};

export default LandingPage;
