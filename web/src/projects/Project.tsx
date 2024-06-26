import { useEffect, useState } from "react"
import Bar from "./children/bar"
import ProjectCard from "./children/projectCard"
import { Link } from "react-router-dom"

const Project: React.FC = () => {
  const [project, setProject] = useState<Project[] | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>()
  const url = `https://lab.vglab.xyz/api/`

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

  async function GetIds() {
    return fetch(`${url}projectids`)
      .then(response => response.json());
  }

  function GetNewestProject(id: string) {
    return fetch(`${url}projects/${id}`)
      .then(response => response.json());
  }

  useEffect(() => {
    const updateProjects = async () => {
      try {
        const ids = await GetIds();

        const localProjects = JSON.parse(window.sessionStorage.getItem("project") || "[]");
        setProject(localProjects);
        setFilteredProjects(localProjects);

        const idStrings = ids.map((obj: { id: string }) => obj.id);

        if (idStrings.length === localProjects.length) {
          return;
        } else if (idStrings.length < localProjects.length) {
          const updatedProjects = localProjects.filter((p: Project) => idStrings.includes(p.id));
          window.sessionStorage.setItem("project", JSON.stringify(updatedProjects));
          setProject(updatedProjects);
          setFilteredProjects(updatedProjects);
        } else {
          const newProjects = await Promise.all(idStrings
            .filter((id: string) => !localProjects.some((p: Project) => p.id === id))
            .map((id: string) => GetNewestProject(id))
          );
          const updatedProjects = [...localProjects, ...newProjects];
          window.sessionStorage.setItem("project", JSON.stringify(updatedProjects));
          setProject(updatedProjects);
          setFilteredProjects(updatedProjects);
        }
      } catch (err) {
        console.log(err);
      }
    };
    updateProjects();
  }, [])



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
      const newestProject = [...project].sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      })[0];
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
            <div className='grid w-full h-[90%] items-start gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-auto scrollbar-webkit'>
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
