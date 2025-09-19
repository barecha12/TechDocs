import React, { useEffect } from "react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  // Apply dark class to <html> when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 flex items-center space-x-2 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
    >
      <span className="text-lg">{darkMode ? "🌙" : "🌞"}</span>
      <span className="hidden sm:inline">{darkMode ? "Dark" : "Light"} Mode</span>
    </button>
  );
};

export default DarkModeToggle;
