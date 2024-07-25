import React, { useContext, useState } from 'react'
import { todoContext } from '../store/todolist'

function PopUp({setPopup}) {
    const [data, setData] = useState({})
    const {state , addTask} = useContext(todoContext)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask(data);
        setPopup(false)
    }
    
    console.log(data);
    return (
        <>
        <div className='absolute h-screen w-screen top-0 left-0 lg:-left-1/3 z-10 bg-black bg-opacity-50'></div>
            <section  className={`flex justify-center top-[14%] left-[14%] sm:left-[25%] lg:top-[14%] lg:left-[30%] absolute h-[80%] lg:h-[82%] w-[80%] sm:w-[50%] lg:w-[40%] z-20 rounded-lg shadow-md shadow-black  ${state.darkmode? 'bg-gray-800 text-white' : ' bg-gray-100 text-gray-500'}`}>
                
                <div className='w-full lg:px-5 pb-10 flex flex-col h-full '>
                    <div className='flex justify-between px-2 pt-5 lg:pt-3'>
                        <h2 className='font-semibold text-xl underline'>Add Task</h2>
                        <button onClick={()=>{setPopup(false) }} className='text-lg font-bold'>X</button>
                    </div>
                    <div className='h-[100%]'>
                    
                        <form onSubmit={handleSubmit} className={`max-w-lg mx-auto p-6  rounded-lg  ${state.darkmode? 'bg-gray-800 text-white' : ' bg-gray-100 text-gray-500'}`}>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Title</label>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    // value={user.title ? user?.title : state.blog.title}
                                    value={data.title}
                                    name="title"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-slate-800"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-bold mb-2">Date</label>
                                <input
                                    // value={user.content ? user?.content : state.blog.content}
                                    value={data.date}
                                    name="date"
                                    type="date"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-slate-800 resize-none"
                                ></input>
                            </div>

                            <div className="mb-4">
                                <label className="block font-bold mb-2">Description (optional)</label>
                                <textarea
                                    placeholder='e.g, study for test'

                                    // value={user.description ? user?.description : state.blog.description}
                                    value={data.description}
                                    name="description"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-slate-800  resize-none   "
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-purple-600 text-white font-bold rounded-md shadow-md hover:shadow-black hover:bg-purple-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                Add Task
                             </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopUp