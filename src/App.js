import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/ContactUs";
import Services from "./routes/Services";
import Projects from "./routes/Projects";
import About from "./routes/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    
    </div>
  );
}

export default App;
