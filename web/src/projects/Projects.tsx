import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Projects: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null)
  const { projectId } = useParams<{ projectId?: string }>();

  type Project = {
    id: string
    projectName: string
    projectDescription: string
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
          <div className="flex flex-col w-full h-full p-6 overflow-auto items-center gap-4">
            <div className="flex h-auto min-h-[500px] max-h-[700px] bg-teal-900 w-auto min-w-[900px] ml-14">IMAGE</div>
            <h1 className="text-white text-3xl font-bold mb-4">{project.projectName}</h1>
            <div className="text-white">
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg prose-white">
                {project.projectDescription}
              </ReactMarkdown>
            </div>
          </div>
          :
          <></>
      }
    </div>
  );
}

export default Projects;
