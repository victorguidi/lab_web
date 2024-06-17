import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Projects from './projects/Projects';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div id="main" className="flex flex-col w-screen h-screen bg-[#0E122B] overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectName?" Component={Projects} />
          <Route path="/docs" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
