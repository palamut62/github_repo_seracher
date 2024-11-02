import { Category, Language } from '../types';

export const categories: Category[] = [
  {
    id: 'web',
    name: 'Web Development',
    icon: 'Globe',
    color: 'text-blue-500',
    keywords: ['web', 'frontend', 'backend', 'fullstack'],
  },
  {
    id: 'data',
    name: 'Data Science',
    icon: 'Database',
    color: 'text-purple-500',
    keywords: ['data-science', 'machine-learning', 'analytics'],
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    icon: 'Smartphone',
    color: 'text-green-500',
    keywords: ['mobile', 'ios', 'android', 'react-native'],
  },
  {
    id: 'ai',
    name: 'AI & ML',
    icon: 'Brain',
    color: 'text-red-500',
    keywords: ['artificial-intelligence', 'machine-learning', 'deep-learning'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'GitBranch',
    color: 'text-orange-500',
    keywords: ['devops', 'ci-cd', 'infrastructure', 'kubernetes'],
  },
  {
    id: 'game',
    name: 'Game Development',
    icon: 'Gamepad2',
    color: 'text-indigo-500',
    keywords: ['game-development', 'unity', 'unreal-engine'],
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'Shield',
    color: 'text-slate-500',
    keywords: ['security', 'cybersecurity', 'pentesting'],
  },
  {
    id: 'ar-vr',
    name: 'AR/VR',
    icon: 'Glasses',
    color: 'text-pink-500',
    keywords: ['augmented-reality', 'virtual-reality', 'mixed-reality'],
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    icon: 'Palette',
    color: 'text-yellow-500',
    keywords: ['ui-design', 'ux-design', 'design-system'],
  },
];

export const languages: Language[] = [
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Java', color: '#b07219' },
  { name: 'Go', color: '#00add8' },
  { name: 'Rust', color: '#dea584' },
  { name: 'Ruby', color: '#701516' },
  { name: 'Kotlin', color: '#A97BFF' },
  { name: 'PHP', color: '#4F5D95' },
  { name: 'C++', color: '#f34b7d' },
  { name: 'MATLAB', color: '#e16737' },
  { name: 'Swift', color: '#ffac45' },
];