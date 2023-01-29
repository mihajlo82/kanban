import Header from "./parts/Header";
import FormAddTask from "./parts/FormAddTask";

const AddTaskModal = ({ taskListId, setOpenAddTask }: any) => {

  return (
    <section className='w-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center mx-auto p-6"'>
      <div className="mt-7 bg-white  rounded-xl w-[500px] max-h-[525px] overflow-auto shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 ">
        <div className="p-4 sm:p-7"> 
          <Header />
          <FormAddTask taskListId={taskListId} setOpenAddTask={setOpenAddTask}/>
        </div>
      </div>

      <div
        onClick={() => setOpenAddTask(false)}
        className="w-screen fixed top-0 left-0 right-0 bottom-0 bg-[#616161] opacity-50"
      ></div>
    </section>
  );
};

export default AddTaskModal;
