// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Navbar from "./Navbar";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
