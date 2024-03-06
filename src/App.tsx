import LandingPage from "./pages/LandingPage";
import MortyUniverse from "./pages/MortyUniverse";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/evil-morty" element={<MortyUniverse />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
