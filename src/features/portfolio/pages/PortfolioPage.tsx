import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from '../../../components/ProjectCard';

const PortfolioPage: React.FC = () => {
  const { projects, loading } = usePortfolio();

  console.log(projects);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-16">My Projects</h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-[#112240] p-8 rounded-xl shadow-lg animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
