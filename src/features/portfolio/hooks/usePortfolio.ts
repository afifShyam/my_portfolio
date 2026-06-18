import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';
import pcariImage from '../../../assets/pcari_preview.png';
import tuxcPreview2 from '../../../assets/tuxc_preview_2.png';
import tuxcPreview3 from '../../../assets/tuxc_preview_3.png';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'TuxC Wallet',
    description:
      'A cryptocurrency wallet app with clear send, receive, and swap flows. Built for fast navigation, simple actions, and reliable transaction handling.',
    category: 'Fintech',
    role: 'Frontend Lead',
    features: ['Send and receive crypto', 'Swap flow', 'Transaction history'],
    impact: 'Led the frontend and helped improve wallet flow stability and state management.',
    images: [
      {
        src: '/tuxc-wallet-800.png',
        srcSet: '/tuxc-wallet-400.png 400w, /tuxc-wallet-800.png 800w, /tuxc-wallet-1200.png 1200w',
        sizes: '(max-width: 600px) 90vw, 600px',
        alt: 'TuxC Wallet UI',
      },
      tuxcPreview2,
      tuxcPreview3,
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=io.tux.wallet&hl=en',
    appStoreLink: 'https://apps.apple.com/ly/app/tux-wallet/id1495945761',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST API'],
  },
  {
    id: 2,
    name: 'Pcari.My App',
    description:
      'Shopping and reservation modules built for smooth browsing, booking, and checkout flows.',
    category: 'E-commerce',
    role: 'Flutter Developer',
    features: ['Shopping module', 'Reservation flow', 'API-driven screens'],
    impact: 'Helped deliver cleaner user flows and faster screen rendering for the app experience.',
    image: pcariImage,
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.pcari.pcari_user&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/pcari-my/id1536313176',
    techStack: ['Flutter', 'Dart', 'BLoC', 'REST API'],
  },
  {
    id: 3,
    name: 'Hiring Caregiver App',
    description:
      'A location-based caregiver app with task management, status tracking, and dependable updates for daily operations.',
    category: 'Health',
    role: 'Flutter Developer',
    features: ['Geolocation support', 'Task management', 'Status updates'],
    impact: 'Built reliable workflows that made it easier to manage caregiver tasks and locations.',
    githubLink: 'https://github.com/afifShyam/seniormatchpro_v1',
    techStack: ['Flutter', 'Firebase', 'BLoC', 'REST API'],
  },
  {
    id: 4,
    name: 'Sleep Tracker App',
    description:
      'A sleep tracking app that stores user data in Firebase and turns it into clear charts and useful insights.',
    category: 'Health',
    role: 'Flutter Developer',
    features: ['Sleep logging', 'Firebase sync', 'Data insights'],
    impact: 'Made sleep data easier to review with simple visuals and consistent state handling.',
    githubLink: 'https://github.com/afifShyam/sleep_tracker',
    techStack: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
  },
  {
    id: 5,
    name: 'Flood Prediction App',
    description:
      'A final year project that uses an SVM model to forecast flood risk with weather data and a simple mobile interface.',
    category: 'Machine Learning',
    role: 'Student Developer',
    features: ['SVM-based forecast', 'Weather updates', 'Flood-risk view'],
    impact: 'Reached 90% model accuracy and helped present flood predictions in a simple mobile format.',
    githubLink: 'https://github.com/afifShyam/flood_prediction_SVM_dart',
    techStack: ['Flutter', 'Python', 'Flask API', 'Firebase', 'SVM'],
  },
];

export const usePortfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 700));
        setProjects(mockProjects);
      } catch (err: unknown) {
        console.error('Error fetching projects:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
