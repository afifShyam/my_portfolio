import { useState, useEffect } from 'react';
import { Project } from '../../../types/projectTypes';
import pcariImage from '../../../assets/pcari_preview.png';
import ihsanmadaniImage from '../../../assets/ihsanmadani_preview.png';
import todoKotlinImage from '../../../assets/todo_kotlin_preview.png';
import tuxcAppStore from '../../../assets/tuxc_preview.png';
import tuxcPreview1 from '../../../assets/tuxc_preview_1.png';
import tuxcPreview2 from '../../../assets/tuxc_preview_2.png';
import tuxcPreview3 from '../../../assets/tuxc_preview_3.png';
import smsTicketsImage from '../../../assets/sms_tickets_preview.png';
import smsHomeImage from '../../../assets/sms_home_preview.png';
import smsDetailImage from '../../../assets/sms_detail_preview.png';
import sigmaHomeImage from '../../../assets/sigma_home_preview.png';
import sigmaFinanceImage from '../../../assets/sigma_finance_preview.png';
import rgSmsCommercialDashboard from '../../../assets/rg_sms/01_real-time_dashboard_1290x2796.png';
import rgSmsCommercialSla from '../../../assets/rg_sms/02_sla_due_dates_and_tracking_1290x2796.png';
import rgSmsCommercialTimeline from '../../../assets/rg_sms/03_activity_and_notes_timeline_1290x2796.png';
import rgSmsCommercialDocuments from '../../../assets/rg_sms/04_inspection_and_document_previews_1290x2796.png';
import rgSmsCommercialAlerts from '../../../assets/rg_sms/05_real-time_push_alerts_1290x2796.png';

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
    architecture: 'Clean Architecture',
    stateManagement: 'Riverpod (Migrated from Provider)',
    delivery: '20+ Google Play & Apple App Store releases',
    screenLabels: ['Overview', 'Multi-Token', 'P2P Transfer', 'Token Swap'],
    image: tuxcAppStore,
    images: [
      { src: tuxcAppStore, alt: 'TuxC Wallet Overview' },
      { src: tuxcPreview1, alt: 'TuxC Multi-Token Portfolio & Balance' },
      { src: tuxcPreview2, alt: 'TuxC P2P Token Send & Receive' },
      { src: tuxcPreview3, alt: 'TuxC Token Swap & Transaction Ledger' },
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=io.tux.wallet&hl=en',
    appStoreLink: 'https://apps.apple.com/ly/app/tux-wallet/id1495945761',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'RESTful APIs', 'CI/CD'],
  },
  {
    id: 3,
    name: 'Service Management System (SMS)',
    description:
      'Enterprise ticketing and hardware dispatch mobile application for field service engineers. Features real-time ticket lifecycle tracking, push notifications, and backend integration.',
    featured: true,
    category: 'Enterprise',
    role: 'Mobile Developer (Radiant GlobalTech)',
    metrics: 'Field Ticketing · C# Backend',
    features: [
      'Field engineer service ticketing & lifecycle tracking',
      'Hardware dispatch and resolution management',
      'Push notifications and status synchronization',
      'Contributed to notification-related backend functionality in C# (.NET)',
    ],
    impact: 'Enhanced field technician operational speed with reliable real-time ticketing workflows and push alerts.',
    delivery: 'Google Play & Apple App Store releases',
    screenLabels: ['Tickets & Priority', 'Multi-Store Home', 'Ticket Details'],
    image: smsTicketsImage,
    images: [
      { src: smsTicketsImage, alt: 'SMS Ticket Management & Priority Screen' },
      { src: smsHomeImage, alt: 'SMS Home & Multi-Store Dashboard' },
      { src: smsDetailImage, alt: 'SMS Ticket Details & Actions' },
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=my.com.rgtech.fmsms.v2&hl=en',
    appStoreLink: 'https://apps.apple.com/my/app/fm-sms-v2/id6805704140',
    techStack: ['Flutter', 'Dart', 'RESTful APIs', 'C# (.NET)', 'Push Notifications', 'Figma'],
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
    architecture: 'Clean Architecture (Native Flutter migration)',
    stateManagement: 'BLoC',
    delivery: 'Automated TestFlight & Firebase App Distribution CI/CD',
    screenLabels: ['B2B Dashboard', 'Multi-Vendor Invoicing'],
    image: sigmaHomeImage,
    images: [
      { src: sigmaHomeImage, alt: 'Sigma B2B Procurement Dashboard & Workflow Counts' },
      { src: sigmaFinanceImage, alt: 'Sigma Multi-Vendor Invoicing & Statements' },
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'CI/CD', 'RESTful APIs', 'Figma'],
  },
  {
    id: 7,
    name: 'RG SMS (Incident Management)',
    description:
      'Internal enterprise incident management mobile application for Retail Group. Designed for store staff, support engineers, and PICs to log, triage, monitor, and resolve incidents with real-time SLA visibility.',
    category: 'Enterprise',
    role: 'Mobile Developer (Radiant GlobalTech)',
    featured: true,
    metrics: 'Real-Time SLA · Clean Architecture & BLoC',
    features: [
      'Role-aware multi-tenant access control and biometric keychain token persistence',
      'Infinite scroll incident lazy grid with debounced search and DevExtreme multi-facet filters',
      'Comprehensive ticket details with SLA tracking, activity timeline, and comments',
      'In-app spreadsheet preview (.xlsx, .csv) and photo lightbox with native document fallback',
    ],
    impact:
      'Engineered an offline-resilient, role-aware incident lifecycle app with real-time SLA tracking, multi-facet DevExtreme filtering, and secure multi-tenant access control for retail store operations.',
    architecture: 'Clean Architecture',
    stateManagement: 'BLoC',
    delivery: 'Google Play Store release',
    screenLabels: ['Incident KPIs', 'SLA Tracking', 'Activity Timeline', 'Document Previews', 'Real-Time Alerts'],
    image: rgSmsCommercialDashboard,
    images: [
      { src: rgSmsCommercialDashboard, alt: 'RG SMS Real-Time Incident Dashboard & KPIs' },
      { src: rgSmsCommercialSla, alt: 'RG SMS SLA Due Dates & Tracking' },
      { src: rgSmsCommercialTimeline, alt: 'RG SMS Activity & Notes Timeline' },
      { src: rgSmsCommercialDocuments, alt: 'RG SMS Inspection & Document Previews' },
      { src: rgSmsCommercialAlerts, alt: 'RG SMS Real-Time Push Alerts' },
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.rgtech.sms&hl=en',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Dio', 'Clean Architecture', 'DevExtreme API', 'Secure Storage'],
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
  {
    id: 8,
    name: 'ai-memorycore (mcore)',
    description:
      'Deterministic GraphRAG and Cognitive Memory-Augmented Generation (MAG) engine for AI coding assistants. Features multi-tier retrieval, hybrid BM25 + ONNX dense embeddings, and automated knowledge graph synchronization.',
    category: 'AI Systems',
    role: 'Creator & Lead Architect',
    featured: false,
    metrics: 'Deterministic GraphRAG · Hybrid BM25 & ONNX',
    features: [
      'Multi-tier retrieval combining BM25 sparse and MiniLM ONNX dense embeddings',
      'Cognitive memory architecture: working, episodic, procedural, and semantic layers',
      '17 automated production release verification gates',
    ],
    impact:
      'Engineered a local-first cognitive memory engine delivering source-grounded context packets with deterministic recall guarantees.',
    techStack: ['Python', 'GraphRAG', 'ONNX', 'BM25', 'Knowledge Graph', 'CLI'],
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
