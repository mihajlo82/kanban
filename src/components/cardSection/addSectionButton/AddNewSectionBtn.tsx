import React, { useState } from 'react'
import AddSectionModal from './modal/AddSectionModal';

// interface AddNewSectionProp {
//   dispatch:  Dispatch<AnyAction>
//}
const AddNewSectionBtn = ({dispatch}:any) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="mx-20 flex  flex-shrink-0 ">
        <button className="w-[30px] h-[30px] text-[30px] bg-white bold flex justify-center items-center" onClick={()=> setOpenModal(prev => !prev)}>+</button>

        {openModal && <AddSectionModal dispatch={dispatch} setOpenModal={setOpenModal} /> }
    </div>
  )
}

export default AddNewSectionBtn