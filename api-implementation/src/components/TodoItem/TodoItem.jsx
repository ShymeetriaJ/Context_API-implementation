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
        <li>
            <input
                type="checkbox"
                checked={todo.completed}  
                onChange={() => toggleTodo(todo.id)}  
            />

            {isEditing ? (  
                <>
                    <input 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleEdit();
                            if (e.key === 'Escape') handleGoBack();
                        }}
                        autoFocus
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={handleGoBack}>Go Back</button>
                </>
            ) : (
                <>
                    <span style={{ 
                        textDecoration: todo.completed ? 'line-through' : 'none' 
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;