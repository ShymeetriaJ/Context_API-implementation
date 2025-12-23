import { useContext } from "react";
import TodoContext from './context/TodoContext';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from './components/TodoInput/TodoInput';
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ThemeContext from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";


function App() {
  const {clearCompleted} = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
      <div style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        padding: '20px'
      }}>
      <h1>Todo App</h1>

      <ThemeToggleButton />
      
      <TodoInput />
      
      <TodoList />

      <FilterButtons />
      
      <button onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default App
