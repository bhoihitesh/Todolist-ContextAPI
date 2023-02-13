import React, { useContext, useState } from 'react'
import './App.css'
import { TodoContext } from './Context'
import { Scrollbars } from 'react-custom-scrollbars'
const Todo = () => {
    const [input, setInput] = useState('')
    let { todo, Addtodo, Postapicall } = useContext(TodoContext)
    // let context = useContext(TodoContext)

    const submitData = () => {
        console.log(Addtodo);
    }

    const viewList = (e) => {

    }
    const editList = (e) => {

    }
    const delList = (e) => {

    }
    return (
        <>
            <div className="container shadow-lg">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="todo-top m-5">
                            <div className="heading">
                                <h2 className='text-center'>Todo List Using ContextAPI</h2>
                            </div>
                            <div className="input d-flex justify-content-center m-3">
                                <input type="text form-control" value={input} onChange={(e) => setInput(e.target.value)} />
                                <button className='btn btn-primary ms-1' onClick={submitData}>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mb-5">
                        <div className="todo-bottom">
                            <ul className='list-group'>
                                <Scrollbars style={{ width: "100%", height: '30rem' }} className=" rounded-2">
                                    {todo.map((e, i) => {
                                        return (
                                            <>

                                                <li className='list-group-item d-flex justify-content-between' key={i}>
                                                    {e.name}
                                                    <p className=' fs-4 d-flex align-content-center'>

                                                        <span className='view'>
                                                            <button className='btn btn-primary me-1' onClick={() => viewList()} >View</button>
                                                        </span>
                                                        <span className='edit'>
                                                            <button className='btn btn-success me-1' onClick={() => editList()} >Edit</button>
                                                        </span>
                                                        <span className='delete'>
                                                            <button className='btn btn-danger' onClick={() => delList()} >Delete</button>
                                                        </span>

                                                    </p>
                                                </li>
                                            </>
                                        )
                                    })}
                                </Scrollbars>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
