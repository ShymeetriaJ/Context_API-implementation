import { useContext } from "react";
import TodoContext from './context/TodoContext';


function App() {
  const {todos, addTodo} = useContext(TodoContext);

  return (
    <div>
      <h1>Todo App</h1>
      
      {/* testing */}
      <button onClick={() => addTodo('Test Todo')}>
        Add Test Todo
      </button>
      
      <p>Total todos: {todos.length}</p>
    </div>
  )
}

export default App
