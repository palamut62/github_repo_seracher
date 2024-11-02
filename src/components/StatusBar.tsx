export default function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2 z-10">
      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-4">
          <span>© 2024 GitHub Repo Searcher</span>
          <span>Version 1.0.0</span>
        </div>
        <div className="flex items-center gap-4">
          <span>API Status: Online</span>
          <span>Last Updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}
