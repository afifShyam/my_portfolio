import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Hiring Caregiver Application',
    description:
      'A mobile solution featuring geolocation and task management, reducing caregiver response time by 40%. Built with Flutter and Firebase.',
    category: 'Mobile',
    techStack: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
  },
  {
    id: 2,
    name: 'Sleep Tracker',
    description:
      'A sleep tracking app to monitor patterns and provide insights, improving user sleep awareness by 25%. Utilized Firebase for real-time data visualization.',
    category: 'Health',
    techStack: ['Flutter', 'Firebase', 'Dart', 'BLoC', 'GitHub'],
  },
  {
    id: 3,
    name: 'Flood Prediction App (Final Year Project)',
    description:
      'Developed a flood prediction app using Support Vector Machine (SVM) with 90% accuracy. Delivered real-time weather updates and two-day forecasts.',
    category: 'Machine Learning',
    techStack: ['Flutter', 'SVM', 'Firebase', 'Flask API', 'Python'],
  },
  {
    id: 4,
    name: 'Pcari.My App',
    description:
      'Enhanced shopping and reservation modules, boosting performance by 20%. Integrated clean architecture and REST APIs for seamless user experience.',
    category: 'E-commerce',
    techStack: ['Flutter', 'Dart', 'REST API', 'BLoC', 'Websockets', 'GitHub'],
  },
  {
    id: 5,
    name: 'Ihsanmadani App',
    description:
      'Led frontend development including navigation, API integration, and responsive UI implementation based on Figma designs.',
    category: 'Mobile',
    techStack: ['Flutter', 'REST API', 'Figma', 'BLoC', 'GitHub'],
  },
];

export const usePortfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Simulated delay for fetching data
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Set project data
        setProjects(mockProjects);
      } catch (err) {
        setError('Failed to load projects. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
