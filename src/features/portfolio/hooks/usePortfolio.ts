import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';
import pcariImage from '../../../assets/pcari_preview.png';
import ihsanmadaniImage from '../../../assets/ihsanmadani_preview.png';
import todoKotlinImage from '../../../assets/todo_kotlin_preview.png';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'TuxC Wallet',
    description:
      'A cryptocurrency wallet mobile app with clear send, receive, and swap flows. Built for fast navigation, simple actions, and reliable transaction handling.',
    category: 'Fintech',
    role: 'Frontend Lead',
    featured: true,
    metrics: 'Production App · Crypto Wallet',
    features: ['Send and receive crypto', 'Swap flow & token routing', 'Transaction history & notifications'],
    impact: 'Led the frontend architecture, refactored state management to Riverpod/BLoC, and shipped monthly releases.',
    images: [
      {
        src: 'https://play-lh.googleusercontent.com/HqYp68q2_w_o1EaD13f_Vj_6f_0Y_o',
        alt: 'TuxC Wallet UI',
      },
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=io.tux.wallet&hl=en',
    appStoreLink: 'https://apps.apple.com/ly/app/tux-wallet/id1495945761',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'REST API'],
  },
  {
    id: 2,
    name: 'Pcari.My App',
    description:
      'Multi-vendor shopping and appointment reservation modules built for smooth browsing, booking, and checkout flows.',
    category: 'E-commerce',
    role: 'Flutter Developer',
    featured: false,
    metrics: 'Live Stores · 10k+ Downloads',
    features: ['Shopping & booking module', 'Reservation flow', 'High-performance API screens'],
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
    featured: false,
    metrics: 'Geolocation & Real-time Task Sync',
    features: ['Geolocation support', 'Task management', 'Real-time status updates'],
    impact: 'Built reliable workflows that made it easier to manage caregiver tasks and locations.',
    image: ihsanmadaniImage,
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
    featured: false,
    metrics: 'Firebase Realtime Sync & Analytics',
    features: ['Sleep logging & alarms', 'Firebase cloud sync', 'Visual data insights & trends'],
    impact: 'Made sleep data easier to review with simple visuals and consistent state handling.',
    image: todoKotlinImage,
    githubLink: 'https://github.com/afifShyam/sleep_tracker',
    techStack: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
  },
  {
    id: 5,
    name: 'Flood Prediction App',
    description:
      'An intelligent disaster prediction app that uses a Support Vector Machine (SVM) model to forecast flood risks using live meteorological data.',
    category: 'Machine Learning',
    role: 'Student Developer',
    featured: false,
    metrics: '90% Model Accuracy · SVM AI',
    features: ['SVM-based risk forecast', 'Live weather updates', 'Interactive flood-risk map view'],
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
