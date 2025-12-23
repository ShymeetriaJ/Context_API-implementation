import { useContext } from "react";
import TodoContext from './context/TodoContext';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from './components/TodoInput/TodoInput';


function App() {
  const {clearCompleted} = useContext(TodoContext);

  return (
      <div>
      <h1>Todo App</h1>
      
      <TodoInput />
      
      <TodoList />
      
      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default App
