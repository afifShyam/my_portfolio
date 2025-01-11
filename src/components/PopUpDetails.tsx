import { Project } from '../types/projectTypes';

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-[#1c1c1c] p-10 rounded-xl max-w-3xl shadow-lg relative text-white">
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-4xl font-extrabold mb-6">{project.name}</h2>
        <p className="text-lg mb-6">{project.description}</p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Tech Stack:</h3>
          <p className="text-gray-400">{project.techStack || 'N/A'}</p>
        </div>

        <div className="mt-8 flex space-x-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
