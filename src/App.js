import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/AboutUs";
import OurServices from "./routes/OurServices";
import Contact from "./routes/Contact";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<OurServices />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default App;
