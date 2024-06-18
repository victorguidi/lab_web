import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Projects from './projects/Projects';
import Navbar from "./components/Navbar";
import Project from "./projects/Project";

function App() {
  return (
    <BrowserRouter>
      <div id="main" className="flex flex-col w-screen h-screen bg-[#0E122B] overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/" Component={Project} />
          <Route path="/projects/id/:projectId?" Component={Projects} />
          <Route path="/docs" element={<Home />} />
        </Routes>
        <hr />
        <div className="flex flex-col items-center justify-center w-full h-auto min-h-[5%] p-4 text-white">
          <p>Contact Information: email</p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
