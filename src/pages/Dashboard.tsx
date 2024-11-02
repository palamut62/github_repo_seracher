import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RepositoryCard from '../components/RepositoryCard';
import StatusBar from '../components/StatusBar';

import { Repository } from '../types';

import { languageColors } from '../utils/languageColors'

export default function Dashboard() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [topStarredRepos, setTopStarredRepos] = useState<Repository[]>([]);
  const [topForkedRepos, setTopForkedRepos] = useState<Repository[]>([]);
  const [latestRepos, setLatestRepos] = useState<Repository[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTopRepositories();
  }, []);

  const fetchTopRepositories = async () => {
    setIsLoading(true);
    try {
      const [starredResponse, forkedResponse, latestResponse] = await Promise.all([
        fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=10'),
        fetch('https://api.github.com/search/repositories?q=forks:>1&sort=forks&order=desc&per_page=10'),
        fetch('https://api.github.com/search/repositories?q=artificial-intelligence+machine-learning+deep-learning&sort=stars&order=desc&per_page=10')
      ]);

      const [starredData, forkedData, latestData] = await Promise.all([
        starredResponse.json(),
        forkedResponse.json(),
        latestResponse.json()
      ]);

      setTopStarredRepos(starredData.items || []);
      setTopForkedRepos(forkedData.items || []);
      setLatestRepos(latestData.items || []);
    } catch (error) {
      console.error('Popüler repolar getirilirken hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (query.startsWith('language:') || query.includes(' ')) {
      return;
    }

    if (!query.trim()) return;

    setIsSearching(true);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc`
      );
      const data = await response.json();
      setRepositories(data.items || []);
    } catch (error) {
      console.error('Failed to fetch repositories:', error);
    } finally {
      setIsLoading(false);
      setIsSearching(false);
    }
  };

  const handleCategoryClick = async (keywords: string[]) => {
    setIsLoading(true);
    try {
      const query = keywords.join(' ');
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc`
      );
      const data = await response.json();
      setRepositories(data.items || []);
      setQuery(query);
    } catch (error) {
      console.error('Repolar getirilirken hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageClick = async (language: string) => {
    setIsLoading(true);
    try {
      const query = `language:${language}`;
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc`
      );
      const data = await response.json();
      setRepositories(data.items || []);
      setQuery(query);
    } catch (error) {
      console.error('Repolar getirilirken hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleHomeClick = () => {
    setRepositories([]);
    setQuery('');
    fetchTopRepositories();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        onCategoryClick={handleCategoryClick}
        onLanguageClick={handleLanguageClick}
      />

      <div className="pl-64 flex flex-col h-screen">
        <Header 
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          isSearching={isSearching}
          onHomeClick={handleHomeClick}
          userEmail={currentUser?.email || ''}
          onLogout={handleLogout}
        />

        <main className="px-8 py-6 flex-1 overflow-auto pb-12">
          {repositories.length > 0 ? (
            <div className="mb-12">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Arama Sonuçları</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repositories.map((repo) => (
                  <RepositoryCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">En Çok Yıldızlanan Repolar</h2>
                <ul className="space-y-4">
                  {topStarredRepos.map((repo) => (
                    <li key={repo.id} className="border-b dark:border-gray-700 last:border-b-0 pb-3">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 block"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{repo.full_name}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{repo.description}</p>
                            {/* Dil bilgisi - Renk stilini güncelliyoruz */}
                            {repo.language && (
                              <div className="mt-2">
                                <span 
                                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"
                                  style={{
                                    backgroundColor: `${languageColors[repo.language]?.color}15`, // 15 opaklık için
                                    color: languageColors[repo.language]?.color || '#4A5568',
                                    borderColor: languageColors[repo.language]?.color || '#4A5568',
                                    borderWidth: '1px'
                                  }}
                                >
                                  <span 
                                    className="w-2 h-2 rounded-full mr-1.5"
                                    style={{
                                      backgroundColor: languageColors[repo.language]?.color || '#4A5568'
                                    }}
                                  ></span>
                                  {repo.language}
                                </span>
                              </div>
                            )}
                            {/* Etiketler */}
                            <div className="mt-2 flex flex-wrap gap-2">
                              {repo.topics?.slice(0, 3).map((topic: string) => (
                                <span key={topic} className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">En Çok Forklanan Repolar</h2>
                <ul className="space-y-4">
                  {topForkedRepos.map((repo) => (
                    <li key={repo.id} className="border-b dark:border-gray-700 last:border-b-0 pb-3">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 block"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{repo.full_name}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{repo.description}</p>
                            {/* Dil bilgisi */}
                            {repo.language && (
                              <div className="mt-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                  {repo.language}
                                </span>
                              </div>
                            )}
                            {/* Etiketler */}
                            <div className="mt-2 flex flex-wrap gap-2">
                              {repo.topics?.slice(0, 3).map((topic: string) => (
                                <span key={topic} className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            <span>🍴 {repo.forks_count.toLocaleString()}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Popüler Yapay Zeka Repoları</h2>
                <ul className="space-y-4">
                  {latestRepos.map((repo) => (
                    <li key={repo.id} className="border-b dark:border-gray-700 last:border-b-0 pb-3">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 block"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">{repo.full_name}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{repo.description}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {repo.topics?.slice(0, 3).map((topic: string) => (
                                <span key={topic} className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {repositories.length === 0 && !isLoading && !topStarredRepos.length && !topForkedRepos.length && !latestRepos.length && (
            <div className="text-center text-gray-500 mt-12">
              Yükleniyor...
            </div>
          )}
        </main>

        <StatusBar />
      </div>
    </div>
  );
}