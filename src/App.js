import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"; 
import HomePage from './mainPages/HomePage';
import Home from "./mainPages/Home";
import Corrector from "./mainPages/Corrector";
import Login from "./LoginSignup/LoginPage";
import SignUpPage from "./LoginSignup/SignUpPage";
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/corrector" element={<Corrector />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
