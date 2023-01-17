import React, { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TodoListContext } from "../../contexts/TodoListContext";
import AddNewTodo from "../AddNewTodo";

const TodoList = (props) => {
    const { todo, setTodo } = useState();

    // const { todos, addTodo, removeTodo } = useContext(TodoListContext);

    const {todos, todosDispatch} = useContext(TodoListContext);

    const themeContext = useContext(ThemeContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = themeContext
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const [count, setCount] = useState(0);


    /*------------------------------------------------------------------------------------------------------------------*/
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
    useEffect(() => {
        console.log("enivicivokki", count)
    }, [count]); // only run this callback function when 'count' is changed.
    /*------------------------------------------------------------------------------------------------------------------*/


    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        todosDispatch({type:'REMOVE_TODO', id:id});
        // removeTodo(id);
    }
    return (
        <div style={{ background: theme.background, color: theme.text, height: '100%', textAlign: 'center' }}>
            {todos.length ? (
                todos.map((todo) => {
                    return (
                        <p id={todo.id} onClick={handleRemoveTodo} key={todo.id}> {todo.text} </p>
                    )
                })
            ) :
                <div> You have no todos</div>
            }

            <AddNewTodo todosDispatch={todosDispatch} />
            <button className="ui button primary" onClick={changeTheme}>Change the theme</button>
            <button onClick={() => setCount(count + 1)}>Score: {count}</button>
        </div>
    )
}

export default TodoList;