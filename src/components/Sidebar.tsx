import React from "react";
import { FiBook, FiSettings, FiCode, FiPlayCircle } from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  setOpen: (o: boolean) => void;
}

const sections = [
  { id: "intro", label: "Introduction", icon: <FiBook /> },
  { id: "setup", label: "Setup Guide", icon: <FiSettings /> },
  { id: "api", label: "API Reference", icon: <FiCode /> },
  { id: "examples", label: "Examples", icon: <FiPlayCircle /> },
];

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  return (
    <aside
      className={`
        h-screen bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out shadow-lg
        ${open ? "w-64" : "w-16"}
      `}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {open ? "«" : "»"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-2 mt-4">
        <h2
          className={`font-semibold text-gray-700 dark:text-gray-200 mb-4 text-lg transition-opacity duration-300
            ${open ? "opacity-100" : "opacity-0"}
          `}
        >
          Docs
        </h2>
        <ul className="space-y-2">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-md relative overflow-hidden
                  text-gray-800 dark:text-gray-200
                  transition-all duration-300 transform hover:scale-105 hover:text-white dark:hover:text-white
                `}
              >
                {/* Animated icon background */}
                <span
                  className={`
                    relative text-xl flex-shrink-0
                    before:absolute before:inset-0 before:bg-blue-500 before:opacity-0 before:rounded-full before:transition-all before:duration-300
                    hover:before:opacity-20
                  `}
                >
                  {sec.icon}
                </span>

                {/* Sliding label */}
                <span
                  className={`
                    whitespace-pre transition-all duration-300
                    ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                  `}
                >
                  {sec.label}
                </span>

                {/* Hover background animation */}
                <span
                  className={`
                    absolute inset-0 bg-blue-500 rounded-md scale-x-0 origin-left transition-transform duration-300
                    hover:scale-x-100 z-0
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
