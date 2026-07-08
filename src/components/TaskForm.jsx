import { useSelector } from "react-redux";

const TaskForm = () => {
  const { employees } = useSelector((state) => state.employee);
  const  taskPriorities  = useSelector((state) => state.taskPriority);
  const  repetTasks  = useSelector((state) => state.repetTask);
  return (
    <form className="grid grid-cols-2 gap-4 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="employee" className="text-white text-lg font-semibold">
          Select Employee
        </label>
        <select id="employee">
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee} value={employee}>
              {employee}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-white text-lg font-semibold">
          Date
        </label>
        <input type="date" id="date" placeholder="Select a date" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="employee" className="text-white text-lg font-semibold">
         Task Priority
        </label>
        <select id="employee">
          <option value="">Select Priority ({taskPriorities.join(', ')})</option>
          {taskPriorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="employee" className="text-white text-lg font-semibold">
         Repet Task
        </label>
        <select id="employee">
          <option value="">Select ({repetTasks.join(', ')})</option>
          {repetTasks.map((task) => (
            <option key={task} value={task}>
              {task}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="description" className="text-white text-lg font-semibold">
          Enter Task
        </label>
        <textarea id="description" placeholder="Enter Task" />
      </div>
    </form>
  );
};

export default TaskForm;
