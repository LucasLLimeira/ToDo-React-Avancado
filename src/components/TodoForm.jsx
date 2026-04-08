import { memo } from 'react';
import { useTodo } from '../hooks/useTodo';
import useInput from '../hooks/useInput';
import './TodoForm.css';

const TodoForm = memo(function TodoForm() {
  const { addTask } = useTodo();
  const input = useInput('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.value.trim()) return;
    addTask(input.value);
    input.reset();
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__input"
        placeholder="Adicionar nova tarefa..."
        value={input.value}
        onChange={input.onChange}
        aria-label="Nova tarefa"
      />
      <button
        type="submit"
        className="todo-form__button"
        disabled={!input.value.trim()}
      >
        Adicionar
      </button>
    </form>
  );
});

export default TodoForm;
