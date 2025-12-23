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
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="What needs to be done?"
        autoFocus
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;