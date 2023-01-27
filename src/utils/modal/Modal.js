import React from 'react'

const Modal = ({children, setOpenModal}) => {
  return (
  <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center mx-auto p-6">
     {children}
     <div onClick={()=>setOpenModal(false)} className="w-screen fixed top-0 left-0 right-0 bottom-0 bg-[#616161] opacity-50"></div>
  </section>
  )
}

export default Modal