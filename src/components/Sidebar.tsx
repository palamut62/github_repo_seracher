import { categories, languages } from '../data/categories';
import * as Icons from 'lucide-react';

interface SidebarProps {
  onCategoryClick: (keywords: string[]) => void;
  onLanguageClick: (language: string) => void;
}

export default function Sidebar({ onCategoryClick, onLanguageClick }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-dark-800 border-r border-dark-200 dark:border-dark-700 p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-sm font-semibold mb-4 text-dark-900 dark:text-dark-100">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ElementType;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.keywords)}
                className="w-full flex items-center p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
              >
                <IconComponent className={`w-5 h-5 ${category.color} mr-3`} />
                <span className="text-xs text-dark-700 dark:text-dark-300">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4 text-dark-900 dark:text-dark-100">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => onLanguageClick(lang.name)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
              style={{
                backgroundColor: `${lang.color}15`,
                color: lang.color,
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}