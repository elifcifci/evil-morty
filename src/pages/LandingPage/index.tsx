import UniverseItem from "../../components/molecules/UniverseItem";
import { IUniverseItemProps } from "../../interfaces/universeInterfaces";
import { universeList } from "../../constants/universeList";
import SpaceShip from "../../components/atoms/SpaceShip";
import styles from "./styles.module.scss";
import Keyboard from "../../components/molecules/Keyboard";

const LandingPage = ({}) => {
  return (
    <div className={`pageWrapper ${styles.mainPageContainer}`}>
      <section className={styles.pageTitleAndSpaceship}>
        <h1>Drive the Space Cruiser!</h1>
        <SpaceShip className={styles.spaceShip} imageSize="l" />
      </section>

      <ul>
        {universeList.map((item: IUniverseItemProps) => {
          return <UniverseItem img={item.img} link={item.link} />;
        })}
      </ul>

      <Keyboard className={styles.keyboard} />
    </div>
  );
};

export default LandingPage;
