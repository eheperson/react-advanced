import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AddNewTodo from "./AddNewTodo";

const TodoList = (props) => {
    const themeContext = useContext(ThemeContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = themeContext
    const theme = isDarkTheme ? darkTheme : lightTheme

    const [todos, setTodos] = useState(
        [
            { text: 'Pay your bills', id: 1 },
            { text: 'Do your homework', id: 2 },
            { text: 'Feed the dog', id: 3 },
            { text: 'Plan the family trip', id: 4 },
            { text: 'Go for a walk', id: 5 },
            { text: 'Go for shopping for dinner', id: 6 },
        ]
    )

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random() }
        ])
    }

    /*
    use case 1: 
        useEffect(() => {
            console.log("enivicivokki", todos)
        });

    use case 2:
        useEffect(() => {
            console.log("enivicivokki", todos)
        }, [todos]);
        // only run this callback function when 'todo' is changed.
        second parameter is called as dependency input,
        useEffect only will fire when the data in this array is changed
        if this aray given as input
    */

    // useEffect(() => {
    //     console.log("enivicivokki", count)
    // }, [count]); // only run this callback function when 'count' is changed.

    return (
        <div style={{
            background: theme.background,
            color: theme.text,
            height: '100%',
            textAlign: 'center'
        }}>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}> {todo.text} </li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo={addTodo}/>
            <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
            <button onClick={() => setCount(count + 1)}>Score: {count}</button>
        </div>
    )
}

export default TodoList;