import './FormTodo.scss'
import '../TodoInfo/TodoInfo.scss'
import React, { useState } from 'react'
import { Todo } from '../../types'

interface Props {
    onAdd: (todo: Todo) => void;
    todo: Todo[];
}

const FormTodo: React.FC<Props> = ({ onAdd, todo }) => {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);

        if (title && event.target.value.length >= 6) {
            setError(false);
            setTitleError('');
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title.length < 6) {
            setTitleError('You task must be more 6 letter')
            setError(true);
            return;
        }

        const maxId = Math.max(...todo.map(todo => todo.id), 0) + 1;

        const newTodo: Todo = {
            title: title,
            id: maxId,
        }

        onAdd(newTodo);
        setTitle('');
    }


    return (
        <>
        <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="" className='form__title'></label>
            <input
                type="text"
                className='form__input'
                placeholder="Pleace enter a task"
                value={title}
                onChange={handleChange}
            />
            <button className='todo-list__button todo-list__button--submit'>Submit</button>
            </form>
            {error && <p>{titleError}</p>}
        </>
    )
}

export default FormTodo;