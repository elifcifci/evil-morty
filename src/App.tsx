import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MortyUniverse from "./pages/MortyUniverse";
import Header from "./components/organisms/Header";

function App() {
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header isEvilMode={isEvilMode} />}
      <Routes>
        <>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/evil-morty"
            element={
              <MortyUniverse
                isEvilMode={isEvilMode}
                setIsEvilMode={setIsEvilMode}
              />
            }
          />
        </>
      </Routes>
    </>
  );
}

export default App;
