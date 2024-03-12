import React from "react";

const getWindowDimentions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimentions()
  );
  
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimentions());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
