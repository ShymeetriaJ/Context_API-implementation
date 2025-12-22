import { useContext } from "react";
import TodoContext from './context/TodoContext';


function App() {
  const {todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted} = useContext(TodoContext);

  return (
    <div>
      <h1>Todo App</h1>
      
      {/* testing */}
      <button onClick={() => addTodo('Test Todo')}>
        Add Test Todo
      </button>
      
      <p>Total todos: {todos.length}</p>

      {/* toggle testing */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => toggleTodo(todo.id)}
            />
            <span style= {{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            {/* delete testing */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {/* edit testing */}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
      {/* clear Completed todos testing */}
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default App
