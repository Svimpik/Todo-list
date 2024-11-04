import React from "react";
import { Todo } from "../../types";
import './TodoInfo.scss';

interface Props {
    todo: Todo;
}

const TodoInfo: React.FC<Props>  = ({ todo }) => {
    return (
        <li className="todo-list__item">
            <article className="todo-list__todo">
                <button className="todo-list__button todo-list__button--append">Append</button>
                    <p className="todo-list__title">{todo.title}</p>
                <button className="todo-list__button todo-list__button--edit">Edit</button>
                <button className="todo-list__button todo-list__button--delete">Delete</button>
            </article>
        </li>
    )
}

export default TodoInfo;