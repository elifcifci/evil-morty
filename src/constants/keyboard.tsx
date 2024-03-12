import { ArrowDown } from "../../public/icons/ArrowDown";
import { ArrowLeft } from "../../public/icons/ArrowLeft";
import { ArrowRight } from "../../public/icons/ArrowRight";
import { ArrowUp } from "../../public/icons/ArrowUp";
import { IItemList, IKeyListProps } from "../interfaces/keyboardInterfaces";

export const keyboardList: IKeyListProps = {
  arrows: ["left", "up", "down", "right"],
  letters: ["a", "w", "s", "d"],
};

export const itemList: IItemList = {
  arrows: {
    right: <ArrowRight iconSize="xl" />,
    left: <ArrowLeft iconSize="xl" />,
    up: <ArrowUp iconSize="xl" />,
    down: <ArrowDown iconSize="xl" />,
  },
  letters: {
    d: <span>D</span>,
    a: <span>A</span>,
    w: <span>W</span>,
    s: <span>S</span>,
  },
};
