import { Project } from '../types/projectTypes';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      // onClick={() => router.push(`/projects/${project.id}`)}
      className="bg-[#112240] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
    >
      {/* Optional Image Placeholder */}
      <div className="mb-6">
        <img
          src={`/assets/${project.id}-preview.png`}
          alt={`${project.name} preview`}
          className="rounded-lg w-full h-48 object-cover bg-gray-800"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/placeholder.png';
          }}
        />
      </div>

      <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack?.length ? (
          project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-600 text-sm rounded-md">
              {tech}
            </span>
          ))
        ) : (
          <span className="text-gray-500 text-sm">No tech stack listed</span>
        )}
      </div>

      {/* View Details Link (Hidden on Mobile) */}
      <div className="mt-6 flex justify-end">
        <span className="text-blue-400 underline hidden sm:block">View Details</span>
      </div>
    </div>
  );
};

export default ProjectCard;
