// TodoItem.jsx
import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <button onClick={onToggle} className="toggle-button">
          {todo.completed ? (
            <CheckCircle2 className="check-icon" size={20} />
          ) : (
            <Circle className="circle-icon" size={20} />
          )}
        </button>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button onClick={onDelete} className="delete-button">
        <Trash2 className="delete-icon" size={18} />
      </button>
    </div>
  );
};

export default TodoItem;