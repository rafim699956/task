import { useSelector } from "react-redux";

const TaskReportTabContent = () => {
  const { tasks } = useSelector((state) => state.taskList);
  return (
    <div className="h-full">
      <div className="flex flex-col gap-4 p-2 border border-gray-50 rounded-md w-1/4 h-full">
        <input
          className="border-0 rounded-md p-2 bg-[#556370] text-white text-base font-semibold placeholder:text-white"
          type="text"
          placeholder="Search"
        />
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-2">
              <div className="shrink-0 size-10 bg-[#FF00FA] rounded-full"></div>
              <div className="grow">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold text-lg grow">
                    {task.employee}
                  </h2>
                  <span className="size-4 bg-red-700 rounded-full shrink-0"></span>
                  <span className="text-white font-semibold grow text-end">
                    4:22 PM
                  </span>
                </div>
                <p className="text-white/40 line-clamp-1">{task.taskContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskReportTabContent;
