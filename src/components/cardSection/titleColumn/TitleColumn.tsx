import { useState } from 'react';
import { TitleColumnType } from '../../../types/cardSectionType';

const TitleColumn = ({name, tasksAppendedLength}: TitleColumnType) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center flex-shrink-0 h-10 px-2 relative">
        <span className="block text-sm font-semibold">{name}</span>
        {/* <span>{tasksAppendedLength}</span> */}
       
        <button onClick={()=>setOpenMenu(prev=>!prev)} className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
           <svg className="h-4 fill-current text-grey-dark cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
        </button>

        {openMenu && <div className='absolute -bottom-14 w-[222px] -right-40 bg-white z-10 rounded-lg border-2	'>
          <div className='cursor-pointer hover:bg-violet-100 p-1 w-full flex flex-start pl-5'>Complete</div>          
          <div className='cursor-pointer hover:bg-violet-100 p-1 w-full flex flex-start pl-5'>Move to trash</div>          
        </div>}
    </div>
  )
}

export default TitleColumn