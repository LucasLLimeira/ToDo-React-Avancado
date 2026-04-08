import { createContext, useContext } from 'react';

export const TodoContext = createContext(null);

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
