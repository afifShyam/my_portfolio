import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';
import ihsanmadaniImage from '../../../assets/ihsanmadani_preview.png';
import pcariImage from '../../../assets/pcari_preview.png';
import todoImage from '../../../assets/todo_kotlin_preview.png';
import tuxcPreview2 from '../../../assets/tuxc_preview_2.png';
import tuxcPreview3 from '../../../assets/tuxc_preview_3.png';

// Mock data
export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'TuxC Wallet',
    description:
      'Crypto wallet experience with send, receive, and swap flows. Migrated to Riverpod, tightened API handling, and improved render speed for transaction journeys.',
    category: 'Fintech',
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
    techStack: ['Flutter', 'Riverpod', 'REST API', 'Firebase', 'CI/CD'],
  },
  {
    id: 2,
    name: 'Hiring Caregiver Application',
    description:
      'Geolocation and task management app that reduced caregiver response time by 40%. Built reliable task flows, notifications, and data sync.',
    category: 'Mobile',
    githubLink: 'https://github.com/afifShyam/seniormatchpro_v1',
    techStack: ['Flutter', 'Firebase', 'BLoC', 'REST API'],
  },
  {
    id: 3,
    name: 'Sleep Tracker',
    description:
      'Cross-platform sleep tracker with real-time visualization and sync. Increased user sleep awareness by 25% with clear insights.',
    category: 'Health',
    githubLink: 'https://github.com/afifShyam/sleep_tracker',
    techStack: ['Flutter', 'Firebase', 'Dart', 'BLoC'],
  },
  {
    id: 4,
    name: 'Flood Prediction App (FYP 2023)',
    description:
      'Support Vector Machine model delivering 90% accuracy, with real-time weather updates and two-day forecasts to improve flood preparedness.',
    category: 'Machine Learning',
    githubLink: 'https://github.com/afifShyam/flood_prediction_SVM_dart',
    techStack: ['Flutter', 'SVM', 'Firebase', 'Flask API', 'Python'],
  },
  {
    id: 5,
    name: 'Pcari.My App',
    description:
      'Shopping and reservation experience tuned for performance. Improved engagement by 20% with optimized architecture and REST integrations.',
    category: 'E-commerce',
    image: pcariImage,
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.pcari.pcari_user&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/pcari-my/id1536313176',
    techStack: ['Flutter', 'REST API', 'BLoC', 'WebSockets', 'GitHub'],
  },
  {
    id: 6,
    name: 'Ihsanmadani App',
    description:
      'Implemented navigation, API flows, and responsive UI from Figma for a community app. Focused on stability and consistent delivery.',
    category: 'Mobile',
    image: ihsanmadaniImage,
    playStoreLink: 'https://play.google.com/store/search?q=ihsan+madani&c=apps&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/ihsan-madani/id6479978503',
    techStack: ['Flutter', 'REST API', 'Figma', 'BLoC'],
  },
  {
    id: 7,
    name: 'Todo App (Kotlin)',
    description:
      'Jetpack Compose to-do app with Room, StateFlow, Hilt, and MVVM. Full CRUD flows, responsive UI, and production-ready architecture.',
    category: 'Mobile',
    image: todoImage,
    githubLink: 'https://github.com/afifShyam/TodoAppKT',
    techStack: [
      'Kotlin',
      'Jetpack Compose',
      'Room',
      'StateFlow',
      'Hilt',
      'Android Studio',
      'MVVM',
      'Coroutines',
    ],
  },
];

// Custom hook
export const usePortfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated API call with a delay
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Set project data
        setProjects(mockProjects);
      } catch (err: unknown) {
        // Detailed error logging
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
