import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center w-full h-[10%]">
      <div className="flex justify-start w-1/2 p-6">
        <Link to="/">
          <h1 className="text-white text-3xl font-bold">Lab</h1>
        </Link>
      </div>
      <div className="flex w-1/2 h-full justify-end p-6 items-center">
        <Link to="/docs"><button className="text-white text-xl font-bold mr-10">docs</button></Link>
        <Link to="/projects/"><button className="text-white text-xl font-bold border border-black rounded p-2">projects</button></Link>
      </div>
    </nav>
  )
}
