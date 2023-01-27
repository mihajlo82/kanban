import { useState } from "react";
import { addListToAllTasks } from "../../../../redux/slices/sectionsSlice";

const AddSectionModal = ({dispatch, setOpenModal}:any) => {

  const [colName, setColName] = useState<string>('');

  const addNewColumn = () =>  {
    const data =  {
      id: 100,
      name: colName,
      open_tasks: 0,
      completed_tasks: 0,
      position: 11,
      is_completed: false,
      is_trashed: false,
      tasksAppended: []
    }
    dispatch(addListToAllTasks(data))
    setOpenModal(false)
  }
  return (
    <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-10   flex justify-center mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl w-[500px] h-[260px] shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Add Column</h1>
            </div>
    
            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Column name</label>
                    <div className="relative">
                      <input onChange={(e)=> setColName(e.target.value)} type="tex" id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                    </div>
                    {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
                  </div>
                  <button onClick={addNewColumn} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div onClick={()=>setOpenModal(false)} className="w-screen fixed top-0 left-0 right-0 bottom-0 bg-[#616161] opacity-50"></div>
      </section>
  )
}

export default AddSectionModal