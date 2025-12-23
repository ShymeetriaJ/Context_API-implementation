import React, { useState, useMemo } from "react";
import TodoContext from "./context/TodoContext";
import FilterContext from './context/FilterContext';
import ThemeContext from './context/ThemeContext'

// created AppProviders function
export function AppProviders({children}) {
    // created state
    const [todos, setTodos] = useState([]);
    // created function for adding new todo
    const addTodo = (text) => {
        const newTodo = {
                id: Date.now(),
                text: text,
                completed: false
            };
            setTodos(currentTodos => [...currentTodos, newTodo]);
            console.log('Todo added:', newTodo);
        };
    // created function for toggling todo status
    const toggleTodo = (id) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        console.log('Todo toggled, id', id);
    };
    // created function for deleting todo
    const deleteTodo = (id) => {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));

        console.log('Todo deleted, id:', id);
    };
    // created function to edit todo
    const editTodo = (id, newText) => {
        setTodos(currentTodos =>
            currentTodos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
        console.log('Todo edited, id:', id, 'new text:', newText);
    };

    // created function to clear completed todos
    const clearCompleted = () => {
        setTodos(currentTodos => currentTodos.filter(todo => !todo.completed));
        console.log('Completed todos cleared');
    };
    // created function that creates todo value with Dependency array
    const todoValue = useMemo(() => ({
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted
    }), [todos]);
    // theme state 
    const [theme, setTheme] = useState('light');
    // theme function logic
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };
    const themeValue = useMemo(() => ({theme, toggleTheme}), [theme]);
    //  filter state
    const [filter, setFilter] = useState();
    // filter function logic
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