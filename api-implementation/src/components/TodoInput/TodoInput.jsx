import { useState, useContext } from 'react';
import TodoContext from '../../context/TodoContext';

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputText.trim()) {
      addTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-input-section'>
      <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Things to be done!"
        className='todo-input'
        autoFocus
      />
      <button type="submit" className='add-todo-btn'>Add Todo</button>
    </form>
  );
};

export default TodoInput;