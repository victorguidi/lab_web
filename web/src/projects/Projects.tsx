import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectComponent from '../components/ProjectsDescription';

const Projects: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null)
  const { projectId } = useParams<{ projectId?: string }>();

  type Project = {
    id: string
    projectName: string
    projectDescription: string
    projectText: string
    projectTags: string
    projectStack: string
    projectVideoUrl: string
    projectThumbImgUrl: string
    articleUrl: string
    projectProgress: number
    created_at: Date
    updated_at: Date
  }

  useEffect(() => {
    if (projectId) {
      fetch(`http://localhost:5000/projects/${decodeURIComponent(projectId)}`)
        .then(obj => {
          obj.json()
            .then((r: Project) => {
              console.log(r)
              setProject(r)
            })
        })
        .catch((err) => console.log(err))
    }
  }, [projectId])

  return (
    <div className='flex flex-col w-full h-full'>
      {
        project ?
          <div id="main" className="flex flex-col w-screen h-screen overflow-auto">
            <div className="flex flex-col md:flex-row md:items-stretch md:justify-between p-4 flex-grow max-h-[90%]">
              <div id="project" className="flex flex-col w-full md:w-[60%] h-full border border-black rounded mb-4 md:mb-0 md:mr-4">
                <iframe
                  className="flex w-full h-full"
                  src={project.projectVideoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div id="project-description" className="flex flex-col w-full md:w-[40%] h-full overflow-auto scrollbar-webkit">
                <ProjectComponent
                  projectName={project.projectText.split("\n")[0]}
                  projectDescription={project.projectText}
                  projectId={project.id}
                />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>
          :
          <></>
      }
    </div>
  );
}

export default Projects;
