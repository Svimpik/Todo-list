import './App.css';
import TodoList from './Components/TodoList/TodoList';
import { Todo } from './types';
import './App.scss';

const App = () => {
const todos: Todo[] = [
  { title: 'Learn TypeScript', id: 1 },
  { title: 'Build a React app', id: 2 },
  { title: 'Write unit tests', id: 3 },
];
  return (
    <div className='app'>
      <div className='app__todo'>
        <TodoList todo={todos}/>
      </div>
    </div>
  );
}

export default App;
