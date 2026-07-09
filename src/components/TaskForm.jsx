import { useState } from "react";
import { useSelector } from "react-redux";

const TaskForm = () => {
  const { employees } = useSelector((state) => state.employee);
  const taskPriorities = useSelector((state) => state.taskPriority);
  const repetTasks = useSelector((state) => state.repetTask);

  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    priority: "",
    repeatTask: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.employee) {
      newErrors.employee = "Please select an employee";
    }
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }
    if (!formData.priority) {
      newErrors.priority = "Please select a priority";
    }
    if (!formData.repeatTask) {
      newErrors.repeatTask = "Please select a repeat task";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please enter task description";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="employee" className="text-white text-lg font-semibold">
          Select Employee <span className="text-red-500">*</span>
        </label>
        <select
          id="employee"
          name="employee"
          value={formData.employee}
          onChange={handleChange}
          className={`border ${errors.employee ? "border-red-500" : "border-gray-300"} rounded p-2`}
        >
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee} value={employee}>
              {employee}
            </option>
          ))}
        </select>
        {errors.employee && (
          <p className="text-red-500 text-sm">{errors.employee}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-white text-lg font-semibold">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`border ${errors.date ? "border-red-500" : "border-gray-300"} rounded p-2`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="priority" className="text-white text-lg font-semibold">
          Task Priority <span className="text-red-500">*</span>
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className={`border ${errors.priority ? "border-red-500" : "border-gray-300"} rounded p-2`}
        >
          <option value="">
            Select Priority ({taskPriorities.join(", ")})
          </option>
          {taskPriorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
        {errors.priority && (
          <p className="text-red-500 text-sm">{errors.priority}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="repeatTask"
          className="text-white text-lg font-semibold"
        >
          Repeat Task <span className="text-red-500">*</span>
        </label>
        <select
          id="repeatTask"
          name="repeatTask"
          value={formData.repeatTask}
          onChange={handleChange}
          className={`border ${errors.repeatTask ? "border-red-500" : "border-gray-300"} rounded p-2`}
        >
          <option value="">Select ({repetTasks.join(", ")})</option>
          {repetTasks.map((task) => (
            <option key={task} value={task}>
              {task}
            </option>
          ))}
        </select>
        {errors.repeatTask && (
          <p className="text-red-500 text-sm">{errors.repeatTask}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 col-span-2">
        <label
          htmlFor="description"
          className="text-white text-lg font-semibold"
        >
          Enter Task <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Task"
          className={`border ${errors.description ? "border-red-500" : "border-gray-300"} rounded p-2 min-h-25`}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <div className="col-span-2 flex gap-4">
        <button
          type="submit"
          className="bg-[#008045] text-white py-2 px-6 text-base font-bold rounded cursor-pointer hover:bg-[#006635] transition-colors dark:bg-[#008045] dark:hover:bg-[#006635]"
        >
          Paid
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
