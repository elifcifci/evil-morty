import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const  [isOpenedNotification, setIsOpenedNotification] = React.useState(false);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<LandingPage isOpenedNotification={isOpenedNotification} setIsOpenedNotification={setIsOpenedNotification} />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
