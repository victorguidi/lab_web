import { useEffect, useState } from "react"
import Bar from "./children/bar"
import ProjectCard from "./children/projectCard"
import Projects from "./Projects"
import { Link } from "react-router-dom"

const Project: React.FC = () => {
  const [project, setProject] = useState<Project[] | null>(null)

  type Project = {
    id: string
    projectName: string
    projectDescription: string
    created_at: Date
    updated_at: Date
  }

  useEffect(() => {
    fetch(`http://localhost:5000/projects`)
      .then(obj => {
        obj.json()
          .then((r: Project[]) => {
            console.log(r)
            setProject(r)
          })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='flex flex-col w-screen h-screen overflow-auto'>
      {
        project ?
          <div className="flex flex-col w-full h-full pl-4 pr-4 pt-4">
            <Bar />
            <div className='grid w-full h-[90%] items-start gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-auto'>
              {project.map((project: Project) => (
                <Link to={`/projects/id/${project.id}`}>
                  <button>
                    <ProjectCard
                      id={project.id}
                      projectName={project.projectName}
                      projectDescription={project.projectDescription}
                      projectProgress={30}
                      projectTags={["golang", "c++"]}
                      projectURL={"github.com/victorguidi"}
                    />
                  </button>
                </Link>
              ))}
            </div>
          </div>
          :
          <></>
      }
    </div>
  );
}

export default Project;
