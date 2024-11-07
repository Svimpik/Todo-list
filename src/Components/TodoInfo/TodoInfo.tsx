import React, { useState } from "react";
import { Todo } from "../../types";
import './TodoInfo.scss';

interface Props {
    todo: Todo;
    onDelete: (id: number) => void;
}

const TodoInfo: React.FC<Props> = ({ todo, onDelete}) => {
    const [editTitle, setEditTitle] = useState(todo.title);
    const [isEditing, setIsEditing] = useState(false);
    const [taskError, setTaskError] = useState('');
    const [error, setError] = useState(false);
    const [append, setAppend] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.target.value);

        if (editTitle && event.target.value.length >= 6) {
            setError(false);
            setTaskError('');
        }
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        if (editTitle.length < 6) {
            setError(true);
            setTaskError('You task must be more 6 letter');
            return;
        }

        setIsEditing(false);
    }

    const handleDelete = () => {
        onDelete(todo.id);
    }

    const handleSubmit = () => {
        setAppend(true);

        setTimeout(() => onDelete(todo.id), 15000)
    }

    return (
        <>
        <li className={`todo-list__item ${append ? 'todo-list__item--disabled' : ''}`}>
            <article className="todo-list__todo">
                    <button
                        className="todo-list__button todo-list__button--append"
                        onClick={handleSubmit}
                    >
                        Append
                    </button>
                {isEditing ? (
                <input
                    type="text"
                    className='form__input'
                    placeholder="Pleace change the task"
                    value={editTitle}
                    onChange={handleChange}
                    autoFocus
                    onBlur={handleSave}
                    />
                ) : (
                <p className="todo-list__title">{editTitle}</p>        
                )}    
                
                <button
                    className="todo-list__button todo-list__button--edit"
                    onClick={handleEditClick}
                    disabled={append}
                    >
                    Edit
                </button>
                <button
                    className="todo-list__button todo-list__button--delete"
                        onClick={handleDelete}
                    >
                    Delete
                </button>
            </article>
            </li>
            {error && <p>{taskError}</p>}
        </>
    )
}

export default TodoInfo;