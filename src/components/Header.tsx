'use client';

import { UserCircle2 } from 'lucide-react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  isSearching: boolean;
  onHomeClick: () => void;
  userEmail: string;
  onLogout: () => void;
}

export default function Header({
  query,
  setQuery,
  onSearch,
  isSearching,
  onHomeClick,
  userEmail,
  onLogout
}: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">GitHub Repo Searcher</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.location.href = '/profile'}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            title="Profile"
          >
            <UserCircle2 className="w-6 h-6" />
          </button>
          <UserMenu 
            userEmail={userEmail} 
            onLogout={onLogout}
            onHomeClick={onHomeClick}
          />
          <ThemeToggle />
        </div>
      </div>
      <div className="w-full">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={onSearch}
          isSearching={isSearching}
        />
      </div>
    </header>
  );
}
