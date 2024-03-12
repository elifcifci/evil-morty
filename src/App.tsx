import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MortyUniverse from "./pages/MortyUniverse";
import PokemonUniverse from "./pages/PokemonUniverse";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/evil-morty" element={<MortyUniverse />} />
            <Route path="/pokemon-universe" element={<PokemonUniverse />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
