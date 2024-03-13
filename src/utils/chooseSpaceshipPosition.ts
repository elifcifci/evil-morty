export const chooseSpaceshipPosition = (
  position: number,
  boundary: number,
  speed: number,
  setIsShaking: React.Dispatch<React.SetStateAction<boolean>>,
  initialPosition: number,
) => {
  
    let result =
      speed > 0
        ? position < boundary
          ? position + speed
          : position
        : position > initialPosition
        ? position + speed
        : position;

  if (position === result) {
    setIsShaking(true);
  } else {
    setIsShaking(false);
  }

  return result;
};
