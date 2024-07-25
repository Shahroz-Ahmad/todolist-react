import React, { createContext, useReducer } from 'react'
import axios from 'axios'

const todoContext = createContext()

const initialstate = {
    todo: []
}

const TodoReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATE":
            return { ...state, date: action.payload }
        case "TOGGLE_DARK":
            return { ...state, darkmode: !state.darkmode }
        case "GET_DATA":
            return { ...state, todo: action.payload }
        case "ADD_TASK":
            return { ...state }
        case "DEL_TASK":
            return { ...state, todo: state.todo.filter(e => e.id !== action.payload) }
    }
}

function Provider({ children }) {


    const [state, dispatch] = useReducer(TodoReducer, initialstate)

    function datefetch() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const monthName = currentDate.toLocaleString("en-US", { month: "long" });
        const day = currentDate.getDate();
        const compDate = `${year}-${monthName}-${day}`
        dispatch({ type: 'GET_DATE', payload: compDate })
    }

    async function fetchdata() {
        const { data } = await axios.get('http://localhost:7000/todo');
        dispatch({ type: "GET_DATA", payload: data })
    }
    function ToggleDark() {
        dispatch({ type: 'TOGGLE_DARK' })
    }
    const addTask = async (newTask) => {
        const { data } = await axios.post('http://localhost:7000/todo', newTask);
        dispatch({ type: "ADD_TASK", payload: data });
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:7000/todo/${id}`)
        dispatch({ type: "DEL_TASK", payload: id })
    }
    return (
        <todoContext.Provider value={{ deleteTask, addTask, fetchdata, datefetch, state, ToggleDark }}>
            {children}
        </todoContext.Provider>
    )
}

export { Provider, todoContext }