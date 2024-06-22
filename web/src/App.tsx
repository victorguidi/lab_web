import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Projects from './projects/Projects';
import Navbar from "./components/Navbar";
import Project from "./projects/Project";
import Resume from "./resume/resume";

// #0E122B
function App() {
  return (
    <BrowserRouter>
      <div id="main" className="flex flex-col w-screen h-screen bg-[#010101] overflow-hidden">
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <Navbar />
        <Routes>
          <Route path="/" Component={Project} />
          <Route path="/project/id/:projectId?" Component={Projects} />
          <Route path="/docs" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
