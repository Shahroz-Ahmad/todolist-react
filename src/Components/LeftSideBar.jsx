import React, { useContext } from 'react'
import { todoContext } from '../store/todolist'

function LeftSideBar({popup , setPopup}) {
    const {ToggleDark , state } = useContext(todoContext)
    return (
        <section className={`flex flex-wrap px-4 lg:px-0 lg:flex-nowrap lg:items-start lg:flex-col items-center lg:justify-start justify-center gap-5 py-10 ${state.darkmode ? 'bg-gray-800 text-white' : 'text-gray-600  bg-gray-100'}`}>
            <h1 className='font-bold text-center lg:text-left text-2xl lg:pl-10'>TO-DO-LIST</h1>
            <button className='bg-purple-600 text-white mx-auto md:mx-0 px-10 lg:w-10/12 py-2 font-semibold text-lg rounded-lg md:ml-10' onClick={()=>setPopup(true)}>ADD TASK</button>
            <div className='flex lg:hidden items-center justify-center gap-5 py-5 '>
                <h2 className='text-xl font-bold text-gray-500'>Hi, User!</h2>
                <img src="1_user3-512.png" alt="User" height={60} width={60} />
            </div>
            <div className='flex lg:hidden justify-center items-center gap-5 pt-10'>
                <h3 className='font-semibold text-lg'>Dark-mode</h3>
                <label class="switch">
                    <input type="checkbox" onChange={ToggleDark} />
                    <span class="slider round"></span>
                </label>
            </div>
            <ul className={`pt-12 w-full font-semibold hidden lg:block ${state.darkmode ? 'text-white' : ''}`}>
                <li className='py-3 bg-purple-400 pl-10'>All Tasks</li>
                <li className='py-3 pl-10'>Important Tasks</li>
                <li className='py-3 pl-10'>Completed Tasks</li>
                <li className='py-3 pl-10'>Uncomplete Tasks</li>
            </ul>
        </section>
    )
}

export default LeftSideBar