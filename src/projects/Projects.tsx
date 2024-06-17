import React from 'react';
import { useParams } from 'react-router-dom';
import Bar from './children/bar';
import ProjectCard from './children/projectCard';
import { file } from '../assets/file';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Projects: React.FC = () => {
  const { projectName } = useParams<{ projectName?: string }>();
  return (
    <div className='flex flex-col w-full h-full'>
      {
        projectName ?
          <div className="flex flex-col w-full h-full p-6 overflow-auto">
            <h1 className="text-white text-3xl font-bold mb-4">{decodeURIComponent(projectName)}</h1>
            <div className="text-white">
              <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg prose-white">
                {file}
              </ReactMarkdown>
            </div>
          </div>
          :
          <div className="flex flex-col w-full h-full pl-4 pr-4 pt-4">
            <Bar />
            <div className='grid w-full h-[90%] items-start gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-auto'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
      }
    </div>
  );
}

export default Projects;
