import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import FilterContext from '../../context/FilterContext';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const getFilteredTodos = () => {
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  if (filteredTodos.length === 0) {
    return <p className='empty-state'>No todos to display!</p>;
  }

  return (
    <ul className='todo-list'>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;