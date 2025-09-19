import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Documentation: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((dm) => {
      const next = !dm;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("dark-mode", JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} setQuery={setQuery} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Content query={query} />
      </div>
    </div>
  );
};

export default Documentation;
