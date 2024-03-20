import { ArrowDown } from "../../public/icons/ArrowDown";
import { ArrowLeft } from "../../public/icons/ArrowLeft";
import { ArrowRight } from "../../public/icons/ArrowRight";
import { ArrowUp } from "../../public/icons/ArrowUp";
import EnterButton from "../components/atoms/EnterButton";
import { IItemList, IKeyListProps } from "../Interfaces/keyboardInterfaces.ts";

export const keyboardList: IKeyListProps = {
  letters: ["a", "w", "s", "d"],
  arrows: ["arrowleft", "arrowup", "arrowdown", "arrowright"],
  enter: ""
};

export const itemList: IItemList = {
  arrows: {
    arrowright: <ArrowRight iconSize="xl" />,
    arrowleft: <ArrowLeft iconSize="xl" />,
    arrowup: <ArrowUp iconSize="xl" />,
    arrowdown: <ArrowDown iconSize="xl" />,
  },
  letters: {
    d: <span>D</span>,
    a: <span>A</span>,
    w: <span>W</span>,
    s: <span>S</span>,
  },
  enter: <EnterButton />,
};
