import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MortyUniverse from "./pages/MortyUniverse";
import Header from "./components/organisms/Header";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/evil-morty"
            element={<MortyUniverse/>}
          />
        </>
      </Routes>
    </>
  );
}

export default App;
