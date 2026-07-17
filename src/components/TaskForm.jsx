import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../app/features/tasklist/tasklistSlice";
import { useTranslation } from "react-i18next";

const TaskForm = () => {
  const { t } = useTranslation();
  const { employees } = useSelector((state) => state.employee);
  const taskPriorities = useSelector((state) => state.taskPriority);
  const repetTasks = useSelector((state) => state.repetTask);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    taskPriority: "",
    repeatTask: "",
    taskContent: "",
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
    if (!formData.taskPriority) {
      newErrors.taskPriority = "Please select a taskPriority";
    }
    if (!formData.repeatTask) {
      newErrors.repeatTask = "Please select a RepeatTask";
    }
    if (!formData.taskContent.trim()) {
      newErrors.taskContent = "Please EnterTask taskContent";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      dispatch(addNewTask(formData));
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form
      className="space-y-4 lg:grid lg:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="employee">
          {t("form.SelectEmployee")}
          <span className="text-red-500">*</span>
        </label>
        <select
          id="employee"
          name="employee"
          value={formData.employee}
          onChange={handleChange}
          className={`border ${errors.employee ? "border-red-500" : "border-gray-300"} rounded p-2`}
        >
          <option value="">SelectEmployee</option>
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
        <label htmlFor="date">
          {t("form.Date")} <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          onClick={(e) => e.target.showPicker()}
          className={`border ${errors.date ? "border-red-500" : "border-gray-300"} rounded p-2`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskPriority">
          {t("form.TaskPriority")}
          <span className="text-red-500">*</span>
        </label>
        <select
          id="taskPriority"
          name="taskPriority"
          value={formData.taskPriority}
          onChange={handleChange}
          className={`border ${errors.taskPriority ? "border-red-500" : "border-gray-300"} rounded p-2`}
        >
          <option value="">
            Select TaskPriority ({taskPriorities.join(", ")})
          </option>
          {taskPriorities.map((taskPriority) => (
            <option key={taskPriority} value={taskPriority}>
              {taskPriority}
            </option>
          ))}
        </select>
        {errors.taskPriority && (
          <p className="text-red-500 text-sm">{errors.taskPriority}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="repeatTask"
          className="text-white text-sm lg:text-lg font-semibold"
        >
          {t("form.RepeatTask")}
          <span className="text-red-500">*</span>
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
        <label htmlFor="taskContent">
          {t("form.EnterTask")}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="taskContent"
          name="taskContent"
          value={formData.taskContent}
          onChange={handleChange}
          placeholder="EnterTask"
          className={`border ${errors.taskContent ? "border-red-500" : "border-gray-300"} rounded p-2 min-h-25`}
        />
        {errors.taskContent && (
          <p className="text-red-500 text-sm">{errors.taskContent}</p>
        )}
      </div>

      <div className="lg:col-span-2 flex gap-4">
        <button
          type="submit"
          className="bg-[#008045] text-white py-2 px-6 text-base font-bold rounded cursor-pointer hover:bg-[#006635] transition-colors dark:bg-[#008045] dark:hover:bg-[#006635]"
        >
          {t("form.Submit")}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
