import React from 'react'

const NameAdd = ({dispatchCustomReducer}: any) => {
  return (
    <div className="flex flex-col items-start">
        <label className="font-bold">Task name</label>
        <input
            type="text"
            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            required
            aria-describedby="email-error"
            onChange={(e)=> dispatchCustomReducer({type: 'NAME_TASK',name: e.target.value})}
        />
  </div>
  )
}

export default NameAdd