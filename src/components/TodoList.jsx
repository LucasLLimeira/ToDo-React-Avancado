import { useMemo } from 'react';
import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  const { filteredTasks, filter, tasks } = useTodo();

  const emptyMessage = useMemo(() => {
    if (tasks.length === 0) return 'Nenhuma tarefa cadastrada. Adicione uma acima!';
    if (filteredTasks.length === 0) {
      if (filter === 'completed') return 'Nenhuma tarefa concluída ainda.';
      if (filter === 'pending') return 'Todas as tarefas foram concluídas! 🎉';
    }
    return null;
  }, [tasks.length, filteredTasks.length, filter]);

  if (emptyMessage) {
    return <p className="todo-list__empty">{emptyMessage}</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;
