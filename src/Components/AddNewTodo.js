import React, { useState } from 'react'

const AddNewTodo = (props) => {
    const { addTodo } = props;
    const [todos, setTodos] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'> Todo </label>
            <input type='text' value={todos} id='todo' onChange={(e) => setTodos(e.target.value)} />
            <input type='submit' />
        </form>
    )
}

export default AddNewTodo;