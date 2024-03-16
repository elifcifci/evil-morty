export type ArrowDirection = "arrowleft" | "arrowright" | "arrowup" | "arrowdown";
export type LetterDirection = "d" | "a" | "w" | "s";
export type KeyboardTypes = "arrows" | "letters";

export interface IKeyListProps {
  arrows: ArrowDirection[];
  letters: LetterDirection[];
  enter: string;
}

export interface IKeyItemProps {
  selectedKey: string;
  keyboardType: string;
  direction?: ArrowDirection | LetterDirection;
}

export interface IItemList {
  arrows: {
    arrowright: JSX.Element;
    arrowleft: JSX.Element;
    arrowup: JSX.Element;
    arrowdown: JSX.Element;
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
  selectedKey: string;
  className: string;
}
