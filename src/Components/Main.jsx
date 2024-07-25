import React, { useState } from 'react'
import Content from './Content'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function Main() {

  const [popup , setPopup] = useState()
  
  return (
    <>
    <section className='grid grid-cols-1 lg:grid-cols-5 h-auto'>
    <LeftSideBar popup={popup} setPopup={setPopup} />
    <Content popup={popup} setPopup={setPopup} />
    <RightSideBar />
    </section>
    {/* <section className='border border-red-500 style'>
      parent
    <main className='sidebar'>
      child
    </main>
    </section> */}
    </>
  )
}

export default Main