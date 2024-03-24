import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
