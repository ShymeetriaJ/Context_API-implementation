import { useState } from "react";
// created AppProviders function
export function AppProviders({children}) {
    // created state
    const [todos, setTodos] = useState([]);
    // created function for adding new todo
    const addTodo = (text) => {

    };
    // created function for toggling todo status
    const toggleTodo = (id) => {

    };
    // created function for deleting todo
    const deleteTodo = (id) => {

    };
    // created function to edit todo
    const editTodo = (id) => {

    };
    // created function to clear completed todo
    const clearCompleted = () => {

    };
}