import React, { useReducer } from "react";
import { createContext } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
    // const [state_itself, dispath_function] = useReducer('reducer', 'initial_value_of_this_reducer')
    const [todos, todosDispatch] = useReducer(todosReducer,
        [{ text: 'Pay your bills', id: 1 },
        { text: 'Do your homework', id: 2 },
        { text: 'Feed the dog', id: 3 },
        { text: 'Plan the family trip', id: 4 },
        { text: 'Go for a walk', id: 5 },
        { text: 'Go for shopping for dinner', id: 6 },]
    );

    return (
        <TodoListContext.Provider value={{ todos, todosDispatch}}>
            {children}
        </TodoListContext.Provider>
    )
};

export default TodoListContextProvider;


/* context provider without reducer
-------------------------------------------------------------------------

    const TodoListContextProvider = ({children}) => {
        const [todos, setTodos] = useState([
                { text: 'Pay your bills', id: 1 },
                { text: 'Do your homework', id: 2 },
                { text: 'Feed the dog', id: 3 },
                { text: 'Plan the family trip', id: 4 },
                { text: 'Go for a walk', id: 5 },
                { text: 'Go for shopping for dinner', id: 6 },
        ]) 

        const addTodo = (todo) => {
            setTodos([
                ...todos,
                { text: todo, id: todos.length}
            ]);
        };

        const removeTodo = (id) => {
            setTodos(todos.filter((todo) => {
                return todo.id !== Number(id);
            }));
        };

        return (
            <TodoListContext.Provider value={{ todos, addTodo, removeTodo}}>
                {children}
            </TodoListContext.Provider>
        )
    };

-------------------------------------------------------------------------
*/