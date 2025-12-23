import { useContext } from "react";
import TodoContext from './context/TodoContext';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from './components/TodoInput/TodoInput';
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ThemeContext from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import './App.css';


function App() {
  const {clearCompleted} = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`app-container ${theme}`}>
      <header className="app-header">
        <h1 className="app-title">Getter Done Application</h1>
        <ThemeToggleButton />
      </header>
      
      <main className="app-content">
        <TodoInput />
        <FilterButtons />
        <TodoList />
        
        <button onClick={clearCompleted} className="clear-completed-btn">
          Clear Completed
        </button>
      </main>
    </div>
  )
}

export default App
