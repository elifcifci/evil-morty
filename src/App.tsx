import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvilMortyThema from "./components/atoms/EvilMortyButton";

function App() {
  const [isOpenedNotification, setIsOpenedNotification] = React.useState(false);
  const [isEvilMode, setIsEvilMode] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  return (
    <div>
      {isEvilMode && <audio
        loop
        autoPlay
        ref={audioRef}
        className="evil-audio"
        src="../public/song/evil-song.mp3"
      />}
      <EvilMortyThema isEvilMode={isEvilMode} setIsEvilMode={setIsEvilMode} />
      <BrowserRouter>
        <Routes>
          <>
            <Route
              path="/"
              element={
                <LandingPage
                  isEvilMode={isEvilMode}
                  isOpenedNotification={isOpenedNotification}
                  setIsOpenedNotification={setIsOpenedNotification}
                />
              }
            />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
