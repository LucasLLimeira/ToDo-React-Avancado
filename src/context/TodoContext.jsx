import { useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodoContext } from '../hooks/useTodo';

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('todo-tasks', []);
  const [filter, setFilter] = useLocalStorage('todo-filter', 'all');

  const addTask = useCallback(
    (text) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setTasks((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: trimmed,
          completed: false,
          createdAt: Date.now(),
        },
      ]);
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  const removeTask = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks]
  );

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((t) => t.completed);
      case 'pending':
        return tasks.filter((t) => !t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      filter,
      setFilter,
      addTask,
      toggleTask,
      removeTask,
    }),
    [tasks, filteredTasks, filter, setFilter, addTask, toggleTask, removeTask]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
