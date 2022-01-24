import React, { useEffect, useState } from 'react'
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do you homework', id: 2 },
        { text: 'Feed to dogs', id: 3 },

    ]);
    const [count, setcount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random() }
        ]
        )
    }
    useEffect(() => {
        console.log(todos, 'showw');
    }, [todos]);

    useEffect(() => {
        console.log(count, 'ss');
    }, [count]);

    return (
        <div>
            <ul>
                {
                    todos.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
            <AddNewTodo addTodo={addTodo} />
            <button onClick={() => setcount(count + 1)}>Source: {count} </button>
        </div>
    )
}

export default TodoList;