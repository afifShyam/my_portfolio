import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';
import pcariImage from '../../../assets/pcari_preview.png';
import ihsanmadaniImage from '../../../assets/ihsanmadani_preview.png';
import todoKotlinImage from '../../../assets/todo_kotlin_preview.png';
import tuxcAppStore from '../../../assets/tuxc_preview.png';
import tuxcPlayStore from '../../../assets/tuxc_play_4.png';
import smsTicketsImage from '../../../assets/sms_tickets_preview.png';
import smsHomeImage from '../../../assets/sms_home_preview.png';
import smsDetailImage from '../../../assets/sms_detail_preview.png';
import sigmaHomeImage from '../../../assets/sigma_home_preview.png';
import sigmaFinanceImage from '../../../assets/sigma_finance_preview.png';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'TuxC Wallet',
    description:
      'Cryptocurrency wallet supporting token transfers, send/receive transactions, and token swap functionality. Migrated state management from Provider to Riverpod and restructured codebase using Clean Architecture.',
    category: 'Fintech',
    role: 'Flutter Developer (Coinyex)',
    featured: true,
    metrics: '20+ Store Releases · Riverpod',
    features: [
      'Token transfers, send & receive',
      'Token swap functionality',
      'Riverpod state management & Clean Architecture',
      '20+ Google Play & Apple App Store releases',
    ],
    impact: 'Optimized UI rendering and transaction flows, improving performance and user experience by 10–20%.',
    image: tuxcAppStore,
    images: [
      { src: tuxcAppStore, alt: 'TuxC Wallet Apple App Store Screenshot' },
      { src: tuxcPlayStore, alt: 'TuxC Wallet Google Play Store Screenshot' },
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=io.tux.wallet&hl=en',
    appStoreLink: 'https://apps.apple.com/ly/app/tux-wallet/id1495945761',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'RESTful APIs', 'CI/CD'],
  },
  {
    id: 2,
    name: 'Sigma (B2B Procurement Platform)',
    description:
      'Centralized B2B procurement mobile application for multi-vendor purchasing and order tracking. Migrated legacy WebView modules to native Flutter, improving UI responsiveness by ~90%.',
    category: 'Enterprise',
    role: 'Mobile Developer (Radiant GlobalTech)',
    featured: true,
    metrics: 'Sole Mobile Dev · ~90% UI Boost',
    features: [
      'B2B centralized procurement & order workflows',
      'Legacy WebView to native Flutter migration',
      'Automated TestFlight & Firebase App Distribution CI/CD pipelines',
      'UI/UX redesign implemented directly from Figma designs',
    ],
    impact: 'Sole mobile developer responsible for end-to-end Flutter development, performance optimization, and deployment workflows.',
    image: sigmaHomeImage,
    images: [
      { src: sigmaHomeImage, alt: 'Sigma B2B Procurement Dashboard & Workflow Counts' },
      { src: sigmaFinanceImage, alt: 'Sigma Multi-Vendor Invoicing & Statements' },
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'CI/CD', 'RESTful APIs', 'Figma'],
  },
  {
    id: 3,
    name: 'Service Management System (SMS)',
    description:
      'Enterprise ticketing and hardware dispatch mobile application for field service engineers. Features real-time ticket lifecycle tracking, push notifications, and backend integration.',
    category: 'Enterprise',
    role: 'Mobile Developer (Radiant GlobalTech)',
    featured: false,
    metrics: 'Field Ticketing · C# Backend',
    features: [
      'Field engineer service ticketing & lifecycle tracking',
      'Hardware dispatch and resolution management',
      'Push notifications and status synchronization',
      'Contributed to notification-related backend functionality in C# (.NET)',
    ],
    impact: 'Enhanced field technician operational speed with reliable real-time ticketing workflows and push alerts.',
    image: smsTicketsImage,
    images: [
      { src: smsTicketsImage, alt: 'SMS Ticket Management & Priority Screen' },
      { src: smsHomeImage, alt: 'SMS Home & Multi-Store Dashboard' },
      { src: smsDetailImage, alt: 'SMS Ticket Details & Actions' },
    ],
    techStack: ['Flutter', 'Dart', 'RESTful APIs', 'C# (.NET)', 'Push Notifications', 'Figma'],
  },
  {
    id: 4,
    name: 'Pcari.My App',
    description:
      'Multi-vendor e-commerce platform. Developed Shopping and Reservation modules by integrating RESTful APIs and implementing Clean Architecture, reducing post-release issues by 35%.',
    category: 'E-commerce',
    role: 'Mobile Developer (RF Infinite)',
    featured: false,
    metrics: '20% Engagement · 35% Issue Reduction',
    features: ['Shopping & reservation modules', 'Figma to Flutter UI delivery', 'Clean Architecture implementation'],
    impact: 'Translated high-fidelity Figma designs into responsive interfaces, improving user engagement by 20%.',
    image: pcariImage,
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.pcari.pcari_user&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/pcari-my/id1536313176',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'RESTful APIs', 'Figma'],
  },
  {
    id: 5,
    name: 'Ihsan Madani App',
    description:
      'Service application with responsive UI, navigation workflows, API integration, and social media package features built from Figma specifications.',
    category: 'Enterprise',
    role: 'Mobile Developer (RF Infinite)',
    featured: false,
    metrics: 'Responsive UI & API Integration',
    features: ['Navigation & user interface delivery', 'RESTful API integration', 'Social media package modules'],
    impact: 'Collaborated closely with backend engineers and translated Figma designs into pixel-perfect responsive Flutter interfaces.',
    image: ihsanmadaniImage,
    playStoreLink: 'https://play.google.com/store/search?q=ihsan+madani&c=apps&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/ihsan-madani/id6479978503',
    techStack: ['Flutter', 'Dart', 'BLoC', 'RESTful APIs', 'Figma'],
  },
  {
    id: 6,
    name: 'To-Do Mobile App (Android Native)',
    description:
      'Native Android task management application built with Kotlin, Jetpack Compose, Room SQLite database, and clean architecture for fluid offline productivity.',
    category: 'Productivity',
    role: 'Android Developer',
    featured: false,
    metrics: 'Kotlin · Jetpack Compose · Room DB',
    features: ['Offline Room database caching', 'Declarative Jetpack Compose UI', 'MVVM reactive state flow'],
    impact: 'Engineered clean declarative UI and local data persistence with Kotlin coroutines.',
    image: todoKotlinImage,
    githubLink: 'https://github.com/afifShyam',
    techStack: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines', 'MVVM'],
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
        await new Promise((resolve) => setTimeout(resolve, 350));
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
