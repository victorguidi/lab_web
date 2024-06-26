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

// #231B43
const ProjectCard: React.FC<Project> = ({
  id, projectName, projectDescription, projectProgress, projectTags, projectStack, projectURL, projectThumbImgUrl
}) => {
  return (
    <div id={id} className="flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text border border-[#010101] dark:border-[#67DBFF] rounded-lg p-2 w-fill  h-[700px] font-bold overflow-auto">
      <img className="mb-4 flex min-h-[300px] max-h-[50%] items-center justify-center text-white font-bold" src={projectThumbImgUrl} />
      <div className="flex flex-col justify-between h-[50%]">
        <div className="flex flex-col h-3/4">
          <h1 className="text-lg font-bold mb-2 text-start">{projectName}</h1>
          <p className="text-lg mb-4 font-thin overflow-hidden text-ellipsis h-max flex-grow line-clamp-6 text-start">{projectDescription}</p>
          <div className="w-full h-5 bg-gray-200 rounded-full mb-2">
            <div className="h-full bg-[#0E192D] rounded-full text-white font-thin text-s text-center" style={{ width: `${projectProgress}%` }}>{projectProgress == 100 ? "Completed" : `${projectProgress}%`}</div>
          </div>
        </div>
        <div className="flex flex-col h-1/4 justify-around items-start">
          <p className="text-sm">Tags: {projectTags.join(", ")}</p>
          <p className="text-sm">Stack: {projectStack.join(", ")}</p>
          <p className="text-sm">GitURL: {projectURL}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
