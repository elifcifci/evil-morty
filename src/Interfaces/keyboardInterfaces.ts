export type ArrowDirection = "left" | "right" | "up" | "down";
export type LetterDirection = "d" | "a" | "w" | "s";
export type KeyboardTypes = "arrows" | "letters";

export interface IKeyListProps {
  arrows: ArrowDirection[];
  letters: LetterDirection[];
  enter: string;
}

export interface IKeyItemProps {
  keyboardType: string;
  direction?: ArrowDirection | LetterDirection;
}

export interface IItemList {
  arrows: {
    right: JSX.Element;
    left: JSX.Element;
    up: JSX.Element;
    down: JSX.Element;
  };
  letters: {
    d: JSX.Element;
    a: JSX.Element;
    w: JSX.Element;
    s: JSX.Element;
  };
  enter: JSX.Element;
}

export interface IKeyboardProps {
  className: string;
}
