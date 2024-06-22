import { useEffect, useState } from "react"
import Bar from "./children/bar"
import ProjectCard from "./children/projectCard"
import { Link } from "react-router-dom"

const Project: React.FC = () => {
  const [project, setProject] = useState<Project[] | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>()

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
    const localProjects = window.sessionStorage.getItem("project")
    if (localProjects) {
      setProject(JSON.parse(localProjects))
      setFilteredProjects(JSON.parse(localProjects))
      return
    }
    fetch(`http://localhost:5000/projects`)
      .then(obj => {
        obj.json()
          .then((r: Project[]) => {
            setProject(r)
            setFilteredProjects(r)
            window.sessionStorage.setItem("project", JSON.stringify(r))
          })
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {

  }, [filteredProjects])

  const FilterByTag = (tag: string) => {
    if (project) {
      const projects = project.filter((project) =>
        Array.from(project.projectTags.split(",")).some(t => t.toLowerCase() === tag.toLowerCase())
      );
      setFilteredProjects(projects);
    }
  };

  const findNewestProject = () => {
    if (project) {
      const newestProject = [...project].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
      setFilteredProjects([newestProject]);
    }
  };

  const searchByTitleOrDescription = (query: string) => {
    if (query == "") setFilteredProjects(project)
    if (project) {
      const projects = project.filter((project) =>
        project.projectName.toLowerCase().includes(query.toLowerCase()) ||
        project.projectDescription.toLowerCase().includes(query.toLowerCase()) ||
        project.projectStack.includes(query.toLowerCase())
      );
      setFilteredProjects(projects);
    }
  };

  return (
    <div className='flex flex-col w-screen h-screen overflow-auto'>
      {
        filteredProjects ?
          <div className="flex flex-col w-full h-full pl-4 pr-4 pt-4">
            <Bar
              FilterByTag={FilterByTag}
              findNewestProject={findNewestProject}
              searchByTitleOrDescription={searchByTitleOrDescription}
            />
            <div className='grid w-full h-[90%] items-start gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-auto  scrollbar-webkit'>
              {filteredProjects.map((project: Project) => (
                <Link to={`/project/id/${project.id}`} key={project.id}>
                  <button>
                    <ProjectCard
                      id={project.id}
                      projectName={project.projectName}
                      projectDescription={project.projectDescription}
                      projectProgress={project.projectProgress}
                      projectTags={Array.from(project.projectTags.split(","))}
                      projectStack={Array.from(project.projectStack.split(","))}
                      projectURL={"github.com/victorguidi"}
                      projectThumbImgUrl={project.projectThumbImgUrl}
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
