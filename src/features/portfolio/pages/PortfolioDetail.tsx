// import { Project } from '../components';
import { Link } from 'react-router-dom';
import { Project } from '../../../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-[#112240] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
        <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack?.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-600 text-sm rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
