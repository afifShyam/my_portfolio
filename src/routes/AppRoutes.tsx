import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from '../features/portfolio/pages/PortfolioDetail';
import Home from '../pages/Home';
import { Project } from '../types/projectTypes';

const AppRoutes: React.FC = () => {
  const project: Project = {
    id: 1,
    name: 'afif',
    description: 'afif gay',
    category: 'category afif',
    demoUrl: 'demoUrl afif',
    repoUrl: 'repoUrl afif',
    techStack: ['techStack afif'],
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              scrollToPortfolio={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail project={project} />} />
        <Route path="*" element={<h1 className="text-white text-center">404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
