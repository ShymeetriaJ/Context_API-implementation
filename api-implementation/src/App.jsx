import { useContext } from "react";
import TodoContext from './context/TodoContext';
import TodoList from "./components/TodoList/TodoList";


function App() {
  const { addTodo, clearCompleted} = useContext(TodoContext);

  return (
      <div>
      <h1>Todo App</h1>
      
      <button onClick={() => addTodo('Test Todo')}>
        Add Test Todo
      </button>
      
      <TodoList />
      
      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default App
