import { memo } from 'react';
import { useTodo } from '../hooks/useTodo';
import './TodoItem.css';

const TodoItem = memo(function TodoItem({ task }) {
  console.log('[render] TodoItem:', task.id, task.text);
  const { toggleTask, removeTask } = useTodo();

  return (
    <li
      className={`todo-item${task.completed ? ' todo-item--completed' : ''}`}
    >
      <label className="todo-item__label">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="todo-item__text">{task.text}</span>
      </label>
      <button
        className="todo-item__remove"
        onClick={() => removeTask(task.id)}
        aria-label={`Remover tarefa: ${task.text}`}
      >
        ✕
      </button>
    </li>
  );
});

export default TodoItem;
