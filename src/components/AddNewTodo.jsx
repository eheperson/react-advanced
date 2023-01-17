import React from "react";
import { useState } from "react";

const AddNewTodo = ({ todosDispatch }) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent default action
        console.log(todo)
        todosDispatch({type:'ADD_TODO', text: todo});
        setTodo('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'> TO DO </label>
            <input
                type='text'
                id='todo'
                value={todo}
                onChange={handleChange}
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