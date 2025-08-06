import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AskAI from './components/AskAI';
import Flashcards from './components/Flashcards';
import Quizzes from './components/Quizzes';
import StudyPlanner from './components/StudyPlanner';
import FocusTimer from './components/FocusTimer';
import Chat from './components/Chat';
import type { Screen } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const renderScreen = () => {
    switch(activeScreen) {
      case 'home':
        return <Home setActiveScreen={setActiveScreen} />;
      case 'ask':
        return <AskAI />;
      case 'flashcards':
        return <Flashcards />;
      case 'quizzes':
        return <Quizzes />;
      case 'planner':
        return <StudyPlanner />;
      case 'focustimer':
        return <FocusTimer />;
      case 'chat':
        return <Chat />;
      default:
        return <Home setActiveScreen={setActiveScreen} />;
    }
  }

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-navy-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {renderScreen()}
      </main>
    </div>
  );
};

export default App;