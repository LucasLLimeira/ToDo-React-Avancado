import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="app">
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
