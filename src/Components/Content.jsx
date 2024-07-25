import React, { useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { todoContext } from '../store/todolist'
import PopUp from './PopUp'



function Content({ popup, setPopup }) {

  const { state, fetchdata, deleteTask } = useContext(todoContext)

  useEffect(() => {
    fetchdata()
  }, [state.todo]);

  return (
    <section className={`min-h-screen relative col-span-3 ${state.darkmode ? 'bg-gray-900 text-white' : ' bg-gray-200'}`}>
      <Navbar popup={popup} setPopup={setPopup} />
      <main className='px-5'>
        <h2 className='font-semibold text-xl py-7'>ALL TASKS ({state.todo.length} tasks)</h2>
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className={`border-2 border-dashed h-64 rounded-lg flex justify-center items-center flex-col gap-5 py-10  shadow-md  ${state.darkmode ? 'border-white shadow-white' : 'border-black shadow-gray-600'} cursor-pointer`} onClick={() => { setPopup(true) }}>
            <p className='font-bold'>Add Task</p>
            <i className="fa-sharp fa-regular fa-plus text-4xl"></i>
          </div>
          {state?.todo?.map((ele) => (
            <div key={ele.id} className={`border-2 border-black h-64  flex flex-col gap-5 py-2 rounded-lg px-2 hover:shadow-gray-600 shadow-md ${state.darkmode ? 'bg-gray-800' : ' bg-gray-100 text-gray-700'} `}>
              <p className='font-bold italic text-lg'>- {ele.title}</p>
              <p className='font-semibold'>{ele.description}</p>
              <i class="fa-solid fa-calendar-days flex gap-4 text-sm text-red-500"><span><p className={`font-bold tracking-widest text-sm ${state.darkmode ? 'text-white' : 'text-gray-700'}`}>{ele.date}</p></span></i>
              <hr className={`border-2 border-dashed ${state.darkmode ? 'border-white' : ' border-black'}`} />
              <div>
                <button onClick={() => deleteTask(ele.id)}>
                  <i class={`fa-solid fa-trash-can hover:text-red-500 ${state.darkmode ? 'trext-white' : ' text-black'}`}></i>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
      {popup && <PopUp setPopup={setPopup} />}
    </section >
  )
}

export default Content