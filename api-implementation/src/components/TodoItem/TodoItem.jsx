import { useContext, useState } from "react"
import TodoContext from "../../context/TodoContext"

const TodoItem = ({todo}) => {
    // gets the functions to toggle, delete, and edit the todo
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
    // page is in editing mode
    const [isEditing, setIsEditing] = useState(false);
    // updates user input
    const [editText, setEditText] = useState(todo.text);  
    
    // edit todo function and save
    const handleEdit = () => {
        if (editText.trim()) {
            editTodo(todo.id, editText.trim()); 
            setIsEditing(false);
        }
    };
    
    // reset text to original
    const handleGoBack = () => {
        setEditText(todo.text);  
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.completed}  
                onChange={() => toggleTodo(todo.id)}  
            />

            {isEditing ? (  
                <>
                    <input
                        className="todo-edit-input" 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleEdit();
                            if (e.key === 'Escape') handleGoBack();
                        }}
                        autoFocus
                    />
                    <button onClick={handleEdit} className="todo-btn save-btn" >Save</button>
                    <button onClick={handleGoBack} className="todo-btn go-back-btn">Go Back</button>
                </>
            ) : (
                <>
                    <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)} className="todo-btn edit-btn">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="todo-btn delete-btn">Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;