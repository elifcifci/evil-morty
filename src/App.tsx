import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MortyUniverse from "./pages/MortyUniverse";
import Header from "./components/organisms/Header";

function App() {
  const pathname = window.location.pathname;
  const [isEvilMode, setIsEvilMode] = React.useState(false);

  return (
    <>
      <BrowserRouter>
        {pathname !== "/" && <Header isEvilMode={isEvilMode} />}
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
      </BrowserRouter>
    </>
  );
}

export default App;
