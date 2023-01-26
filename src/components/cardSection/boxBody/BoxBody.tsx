import React from 'react'

const BoxBody = () => {
  return (
    <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">

        <div className="relative flex items-center">
           <div className='w-[10px] h-[10px] bg-black rounded-full ml-2'/> 
        </div>

        <div className="relative flex items-center ml-4">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#8E8E8E"><g><path d="M2.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm8.5 0v1H5v-1h6ZM2.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 6v1H5V6h6ZM2.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM11 2v1H5V2h6Z" /></g></g></g></svg>
            <span className="ml-1 leading-none">4</span>
        </div>

        <div className="relative flex items-center ml-4">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#8E8E8E"><g><path d="M12 2v8H3.998L1 12V2h11Zm-1 1H2v7.13L3.695 9H11V3ZM6 6v1H3V6h3Zm4-2v1H3V4h7Z"/></g></g></g></svg>
            <span className="ml-1 leading-none">4</span>
        </div> 
            {/* <img className="w-6 h-6 ml-auto rounded-full" src='https://randomuser.me/api/portraits/women/26.jpg' alt='' /> */}
    </div>
  )
}

export default BoxBody