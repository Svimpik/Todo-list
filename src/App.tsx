import './App.css';
import TodoList from './Components/TodoList/TodoList';
import FormTodo from './Components/FormTodo/FormTodo';
import { Todo } from './types';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onAdd = (newTodo: Todo) => {
    setTodoList(currentTodos => [ newTodo, ...currentTodos])
  }

  const onDelete = (id: number) => {
    setTodoList(currentTodos => currentTodos.filter(todo => todo.id !== id))
  }

  return (
    <div className='app'>
      <div className='app__todo'>
        <h2>Add todo task</h2>
        <FormTodo onAdd={onAdd} todo={todoList}/>
        <TodoList todo={todoList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
