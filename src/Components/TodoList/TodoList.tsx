import { Todo } from "../../types";
import TodoInfo from "../TodoInfo/TodoInfo";
import './TodoList.scss';

interface Props {
    todo: Todo[];
    onDelete: (id: number) => void;
}


const TodoList: React.FC<Props> = ({ todo, onDelete }) => {
    return (
        <section className="todo-list">
            <ul className="todo-list__items">
                {todo.map(todo => (
                    <TodoInfo key={todo.id} todo={todo} onDelete={onDelete} />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;