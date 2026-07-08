import { useSelector } from "react-redux";

const TaskForm = () => {
  const { employees } = useSelector((state) => state.employee);
  return (
    <form className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="employee" className="text-white text-lg font-semibold">
          Select Employee
        </label>
        <select id="employee" className="border border-[#8F98A8] p-2 rounded">
          <option className="text-[#444F61] font-bold text-2xl" value="">
            Select Employee
          </option>
          {employees.map((employee) => (
            <option
              className="text-[#444F61] font-bold text-2xl"
              key={employee}
              value={employee}
            >
              {employee}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
