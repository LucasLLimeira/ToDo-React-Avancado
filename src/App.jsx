import { useEffect } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('todo-theme', null);

  useEffect(() => {
    if (theme) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, [theme, setTheme]);

  useEffect(() => {
    if (!theme) return;
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <TodoProvider>
      <div className="app">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-toggle__icon">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 1.5v3" />
                <path d="M12 19.5v3" />
                <path d="M1.5 12h3" />
                <path d="M19.5 12h3" />
                <path d="M4.2 4.2l2.1 2.1" />
                <path d="M17.7 17.7l2.1 2.1" />
                <path d="M4.2 19.8l2.1-2.1" />
                <path d="M17.7 6.3l2.1-2.1" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-toggle__icon">
              <path
                d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <header className="app__header">
          <h1 className="app__title">Todo List</h1>
          <p className="app__subtitle">Organize suas tarefas com facilidade</p>
        </header>
        <main className="app__main">
          <TodoForm />
          <TodoFilters />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  );
}

export default App;
