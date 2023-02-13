import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export let TodoContext = createContext()

const Context = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [Addtodo, setAddtodo] = useState([])

    const Apicall = async () => {
        try {
            let todoapi = await axios.get("http://localhost:2000/users")
            const res = todoapi.data
            setTodo(res)
        } catch (error) {
            console.log("todo API Error:", error);
        }
    }

    const Postapicall = async ({ Newuser }) => {
        try {
            let todoapi = await axios.post("http://localhost:2000/users", { Newuser })
            const res = await todoapi.data
            setAddtodo(res)
        } catch (error) {
            console.log("todo API Error:", error);
        }
    }
    useEffect(() => {
        Apicall()
        Postapicall()
    }, [])

    return (
        <>
            <TodoContext.Provider value={{ todo, Addtodo, Postapicall }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}

export default Context