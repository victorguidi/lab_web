interface Project {
  id: string
  projectName: string;
  projectDescription: string;
  projectProgress: number;
  projectTags: string[];
  projectStack: string[];
  projectURL: string;
  projectThumbImgUrl: string
}

const ProjectCard: React.FC<Project> = ({
  id, projectName, projectDescription, projectProgress, projectTags, projectStack, projectURL, projectThumbImgUrl
}) => {
  return (
    <div className="flex flex-col bg-[#231B43] border border-black rounded-lg p-2 w-fill  h-[650px] font-bold text-white overflow-auto">
      <img className="mb-4 flex min-h-[300px] max-h-[50%] items-center justify-center text-white font-bold" src={projectThumbImgUrl} />
      <div className="flex flex-col justify-between h-[50%]">
        <div className="flex flex-col h-3/4">
          <h1 className="text-lg font-bold mb-2 text-start">{projectName}</h1>
          <p className="text-lg mb-4 font-thin text-gray-300 overflow-hidden text-ellipsis h-max flex-grow line-clamp-6 text-start">{projectDescription}</p>
          <div className="w-full h-4 bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${projectProgress}%` }}></div>
          </div>
        </div>
        <div className="flex flex-col h-1/4 justify-around text-gray-300 items-start">
          <p className="text-sm">Stack: {projectStack.join(", ")}</p>
          <p className="text-sm">GitURL: {projectURL}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
