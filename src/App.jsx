import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import { Home, AllProjects, ProjectDetails } from "./components";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
