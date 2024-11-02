export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  keywords: string[];
}

export interface Language {
  name: string;
  color: string;
}

export interface User {
  id: string;
  email: string;
  preferences: {
    categories: string[];
    languages: string[];
  };
}