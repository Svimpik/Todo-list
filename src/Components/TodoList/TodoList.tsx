import React from "react";
import { Todo } from "../../types";
import TodoInfo from "../TodoInfo/TodoInfo";
import './TodoList.scss';

interface Props {
    todo: Todo[];
}


const TodoList: React.FC<Props> = ({todo}) => {
    return (
        <section className="todo-list">
            <ul className="todo-list__items">
                {todo.map(todo => (
                    <TodoInfo key={todo.id} todo={todo}/>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;