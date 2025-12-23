import React, { useState, useMemo, useEffect } from "react";
import TodoContext from "./context/TodoContext";
import FilterContext from './context/FilterContext';
import ThemeContext from './context/ThemeContext'

export function AppProviders({children}) {
  
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    
    const addTodo = (text) => {
        const newTodo = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTodos(currentTodos => [...currentTodos, newTodo]);
            console.log('Todo added:', newTodo);
        };
   
    const toggleTodo = (id) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        console.log('Todo toggled, id', id);
    };
  
    const deleteTodo = (id) => {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));

        console.log('Todo deleted, id:', id);
    };
  
    const editTodo = (id, newText) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
        console.log('Todo edited, id:', id, 'new text:', newText);
    };

    const clearCompleted = () => {
        setTodos(currentTodos => currentTodos.filter(todo => !todo.completed));
        console.log('Completed todos cleared');
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
   
    const todoValue = useMemo(() => ({
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted
    }), [todos]);

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });
    
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };
  
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    const themeValue = useMemo(() => ({theme, toggleTheme}), [theme]);
   
    const [filter, setFilter] = useState('all');

    const filterValue = useMemo(() => ({filter, setFilter}), [filter]);

    return (
      <TodoContext.Provider value={todoValue}>
        <FilterContext.Provider value={filterValue}>
          <ThemeContext.Provider value={themeValue}>
          {children}
          </ThemeContext.Provider>
        </FilterContext.Provider>
      </TodoContext.Provider>
    );

}