import { RefObject } from "react";
import { universeList } from "../constants/universeList";

export const getUniverseBounding = (ref: React.Ref<HTMLLIElement>) => {
  const universeBounding = (
    ref as RefObject<HTMLLIElement>
  ).current?.getBoundingClientRect();
  return {
    id: (ref as RefObject<HTMLLIElement>).current?.id,
    top: universeBounding?.top,
    bottom: universeBounding?.bottom,
    left: universeBounding?.left,
    right: universeBounding?.right,
    link: universeList.find(
      (item) => item.id === (ref as RefObject<HTMLLIElement>).current?.id
    )?.link,
  };
};
