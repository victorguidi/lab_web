const ProjectCard: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#231B43] border border-black rounded-lg p-2 w-full h-[700px] font-bold text-white">
      <div className="mb-4 flex h-[50%] items-center justify-center text-white font-bold">IMAGE</div>
      <div className="flex flex-col justify-between h-[50%]">
        <div>
          <h1 className="text-lg font-bold mb-2">NAME</h1>
          <p className="text-sm mb-4 font-thin text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm">STACK ONE</p>
          <p className="text-sm">STACK TWO</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
