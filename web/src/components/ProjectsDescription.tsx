import { Link } from 'react-router-dom'
import { MarkdownRenderer } from '../utils/Markdown';

interface ProjectComponentProps {
  projectName: string;
  projectDescription: string;
  projectId: string
  articleUrl?: string
}


const ProjectComponent: React.FC<ProjectComponentProps> = ({ projectName, projectDescription, projectId, articleUrl }) => {
  return (
    <div className="p-6">
      {
        !projectName.includes("#") ?
          <h1 className="text-white text-3xl font-bold mb-4">{projectName}</h1>
          : <></>
      }
      <MarkdownRenderer
      // className="mb-6 text-gray-300 prose prose-lg prose-white text-xl"
      >
        {projectDescription}
      </MarkdownRenderer>
      {
        articleUrl ?
          <Link to={`/projects/id/${encodeURIComponent(projectId)}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check Article</button>
          </Link>
          : <></>
      }
    </div>
  );
}

export default ProjectComponent;
