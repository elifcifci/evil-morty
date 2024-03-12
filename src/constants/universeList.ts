import { IUniverseListProps } from "../interfaces/universeInterfaces";

export const universeList: IUniverseListProps[] = [
  {
    name: "rick-and-morty",
    img: {
      src: "/public/images/rick-and-morty-universe.png",
      alt: "Rick And Morty Universe",
    },
    link: "/evil-morty",
  },
  {
    name: "pokemon",
    img: {
      src: "/public/images/pokemon-universe.png",
      alt: "Pokemon Universe",
    },
    link: "",
  },
  {
    name: "sailor-moon",
    img: {
      src: "/public/images/sailor-moon-universe.png",
      alt: "Sailor Moon Universe",
    },
    link: "",
  },
];
