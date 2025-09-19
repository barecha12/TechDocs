import React, { useState } from "react";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "setup", label: "Setup Guide" },
  { id: "api", label: "API Reference" },
  { id: "examples", label: "Examples" },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`h-screen bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 
      transition-all duration-500 ease-in-out shadow-lg
      ${open ? "w-64" : "w-16"}`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {open ? "«" : "»"}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`px-4 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}>
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 mb-4 text-lg">Docs</h2>
        <ul className="space-y-2">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 
                hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-300"
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
