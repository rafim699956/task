import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const AddTaskTabContent = () => {
  return (
    <>
      <div className="bg-[#2A3B4D] py-3 px-4 rounded-lg shadow-md border border-[#677483] flex flex-col">
        <p className="text-white text-xl font-semibold">Add Task</p>
        <TaskForm />
      </div>
      <TaskList />
    </>
  );
};

export default AddTaskTabContent;
