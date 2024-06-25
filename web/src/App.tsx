import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './projects/Projects';
import Navbar from "./components/Navbar";
import Project from "./projects/Project";
import Resume from "./resume/resume";
import { useEffect } from "react";

// #0E122B

// TODO: Make Resume component page

function App() {

  type Project = {
    id: string
    projectName: string
    projectDescription: string
    projectText: string
    projectTags: string
    projectStack: string
    projectVideoUrl?: string
    projectThumbImgUrl: string
    articleUrl: string
    projectProgress: number
    created_at: Date
    updated_at: Date
  }

  useEffect(() => {
    fetch(`https://lab.vglab.xyz/api/projects`)
      .then(obj => {
        obj.json()
          .then((r: Project[]) => {
            window.sessionStorage.setItem("project", JSON.stringify(r))
          })
      })
      .catch((err) => console.log(err))
  }, [])

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
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
