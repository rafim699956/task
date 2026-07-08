import ManageTask from "./ManageTask";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const MainContent = () => {
  return (
    <main className="bg-[#161E2B] h-full grow flex flex-col overflow-hidden">
      <ManageTask />
      <div className="p-4 grow overflow-y-auto space-y-4">
        <div className="bg-[#2A3B4D] py-3 px-4 rounded-lg shadow-md border border-[#677483] flex flex-col">
          <p className="text-white text-xl font-semibold">Add Task</p>
          <TaskForm />
        </div>
        <TaskList />
      </div>
    </main>
  );
};

export default MainContent;
