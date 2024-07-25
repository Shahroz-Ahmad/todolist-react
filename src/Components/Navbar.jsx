import React, { useContext, useEffect } from 'react'
import { todoContext } from '../store/todolist'

function Navbar({popup , setPopup}) {
    const {datefetch , state} = useContext(todoContext)

    useEffect(()=>{
        datefetch()
    },[])
  return (
    <nav className='flex flex-wrap lg:flex-nowrap justify-center gap-5 lg:justify-between lg:h-[10vh] px-3 py-3 items-center'>
        <input type="text"
        placeholder='Search task'
        className={` px-2 border-2 py-3 rounded-lg text-sm border-black ${state.darkmode ? 'bg-gray-700 text-gray-200':'bg-white'}`}
        />
        <div className='text-gray-500 font-bold'>
            {state.date}
        </div>
        <div className='flex items-center'>
        <i class="fa-solid fa-bell text-2xl text-purple-600 hover:cursor-auto hidden lg:block"></i>
        <button className='bg-purple-600 text-white px-16 py-2 font-semibold text-lg rounded-lg ml-10' onClick={()=>setPopup(true)}>ADD TASK</button>
        </div>
    </nav>
  )
}

export default Navbar