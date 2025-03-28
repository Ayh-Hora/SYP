import { useState } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';
import './User.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <div className="todo-card">
        <h1 className="todo-title">My Checklist</h1>

        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="add-todo-input"
          />
          <button type="submit" className="add-todo-button">
            Add Task
          </button>
        </form>

        {/* Todo List */}
        <div className="todo-items">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add your first task!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;