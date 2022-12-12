import React from "react";
import { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
    const [todos, setTodos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent default action
        console.log(todos)
        addTodo(todos);
        setTodos('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'> TO DO </label>
            <input
                type='text'
                id='todo'
                value={todos}
                onChange={
                    (e) => setTodos(e.target.value)
                }
            />
            <input
                // className="ui button primary"
                type='submit'
                value='Add Todo'
            />
        </form>
    )
}

export default AddNewTodo;