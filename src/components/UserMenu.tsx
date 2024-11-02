import { LogOut, Home } from 'lucide-react';

export default function UserMenu({ userEmail, onLogout, onHomeClick }: { userEmail: string; onLogout: () => void; onHomeClick: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onHomeClick}
        className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        title="Ana Sayfa"
      >
        <Home className="w-5 h-5" />
      </button>
      <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md">
        {userEmail}
      </span>
      <button
        onClick={onLogout}
        className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        title="Çıkış Yap"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
}