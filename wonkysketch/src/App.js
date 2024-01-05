// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </>
  );
};

export default App;
