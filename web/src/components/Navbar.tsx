import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center w-full h-[10%]">
      <div className="flex justify-start w-1/2 p-6">
        <Link to="/">
          <h1 className="text-white text-3xl font-bold">LAB</h1>
        </Link>
      </div>
      <div className="flex w-1/2 h-full justify-end items-center gap-2 p-6">
        <div className="flex md:w-1/6 justify-between">
          <button className="flex w-[5%] h-auto text-white text-xl font-bold">
            <a href="https://github.com/victorguidi">
              <i className="devicon-github-original"></i>
            </a>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="bg-white" /> */}
          </button>
          <button className="flex w-[5%] h-auto text-white text-xl font-bold">
            <a href="https://gitlab.com/victorguidi">
              <i className="devicon-gitlab-plain colored"></i>
            </a>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" /> */}
          </button>
          <button className="flex w-[5%] h-auto text-white text-xl font-bold">
            <a href="https://www.linkedin.com/in/victor-guidi/">
              <i className="devicon-linkedin-plain"></i>
            </a>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="bg-white" /> */}
          </button>
          {/* <Link to="/projects/"><button className="text-white text-xl font-bold border border-black rounded p-2">projects</button></Link> */}
          <button className="flex w-[5%] h-auto text-white text-xl font-bold">
            <Link to={"/resume"}>
              <i className="devicon-readthedocs-original"></i>
            </Link>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="bg-white" /> */}
          </button>
        </div>
      </div>
    </nav>
  )
}
