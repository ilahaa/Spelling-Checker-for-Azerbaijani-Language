import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './mainPages/HomePage';
import Home from "./mainPages/Home";
import Corrector from "./mainPages/Corrector";
import AboutUs from "./mainPages/AboutUs";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/corrector" element={<Corrector />} />
        <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
