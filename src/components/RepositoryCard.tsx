import { Star, GitFork, Clock } from 'lucide-react';
import { Repository } from '../types';

interface RepositoryCardProps {
  repo: Repository;
}

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-dark-800 rounded-xl shadow-sm hover:shadow-md dark:shadow-dark-900/50 transition-all duration-200"
    >
      <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-2 truncate">
        {repo.full_name}
      </h3>
      <p className="text-dark-600 dark:text-dark-400 text-sm mb-4 line-clamp-2 h-10">
        {repo.description || 'No description available'}
      </p>
      
      <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full" style={{ 
              backgroundColor: repo.language === 'JavaScript' ? '#f7df1e' :
                             repo.language === 'TypeScript' ? '#3178c6' :
                             repo.language === 'Python' ? '#3776ab' :
                             repo.language === 'Java' ? '#b07219' :
                             '#6e7681'
            }} />
            {repo.language}
          </span>
        )}
        
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          {repo.stargazers_count.toLocaleString()}
        </span>
        
        <span className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          {repo.forks_count.toLocaleString()}
        </span>
      </div>
      
      <div className="mt-4 flex items-center text-sm text-dark-500 dark:text-dark-400">
        <Clock className="w-4 h-4 mr-1" />
        Updated {formatDate(repo.updated_at)}
      </div>
    </a>
  );
}