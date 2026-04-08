import { memo } from 'react';
import { useTodo } from '../hooks/useTodo';
import './TodoFilters.css';

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'completed', label: 'Concluídas' },
];

const TodoFilters = memo(function TodoFilters() {
  const { filter, setFilter, tasks } = useTodo();

  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className="todo-filters" role="group" aria-label="Filtrar tarefas">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          className={`todo-filters__btn${
            filter === value ? ' todo-filters__btn--active' : ''
          }`}
          onClick={() => setFilter(value)}
          aria-pressed={filter === value}
        >
          {label}
          <span className="todo-filters__count">{counts[value]}</span>
        </button>
      ))}
    </div>
  );
});

export default TodoFilters;
