import { useSelector } from "react-redux";

const ManageTaskTabContent = () => {
  const { tasks } = useSelector((state) => state.taskList);
  return (
    <div>
      <div className="flex gap-1">
        <p className="py-2 px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative">
          Today
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative">
          This Month
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative">
          All Time
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
      </div>
      <table className="w-full text-center text-white border border-[#677483] overflow-x-auto bg-[#2A3B4D]">
        <thead>
          <tr>
            <th>Date</th>
            <th>Action ID</th>
            <th>Employee</th>
            <th>Task Priority</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-[#677483]">
              <td>{task.date}</td>
              <td>{task.employee}</td>
              <td>{task.employee}</td>
              <td>{task.taskPriority}</td>
              <td>{task.taskContent}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTaskTabContent;
