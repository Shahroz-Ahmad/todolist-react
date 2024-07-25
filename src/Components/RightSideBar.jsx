import React, { useContext } from 'react'
import { todoContext } from '../store/todolist'

function RightSideBar() {
    const {ToggleDark , state} = useContext(todoContext)
    return (
        <section className={` hidden lg:block ${state.darkmode? 'bg-gray-800 text-white' : ' bg-gray-100 text-gray-500'} `}>
            <div className='flex items-center justify-center gap-5 py-5'>
                <h2 className='text-xl font-bold text-gray-500'>Hi, User!</h2>
                <img src="1_user3-512.png" alt="User" height={60} width={60} />
            </div>
            <div className='flex justify-center items-center gap-5 pt-10'>
                <h3 className='font-semibold text-lg'>Dark-mode</h3>
                <label class="switch">
                    <input type="checkbox" onChange={ToggleDark} />
                    <span class="slider round"></span>
                </label>
            </div>
        </section>
    )
}

export default RightSideBar