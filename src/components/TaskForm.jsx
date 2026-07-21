import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask, updateTask } from "../../app/features/tasklist/tasklistSlice";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { closePopup } from "../../app/features/popup/popupSlice";

const TaskForm = () => {
  const { t } = useTranslation();
  const { employees } = useSelector((state) => state.employee);
  const taskPriorities = useSelector((state) => state.taskPriority);
  const repetTasks = useSelector((state) => state.repetTask);
  const popup = useSelector((state) => state.popup.isOpen);
  const mode = useSelector((state) => state.popup.mode);
  const selectedTask = useSelector((state) => state.popup.selectedTask);

  const dispatch = useDispatch();

  const emptyForm = {
    employee: "",
    date: "",
    taskPriority: "",
    repeatTask: "",
    taskContent: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && selectedTask) {
      let formattedDate = "";
      if (selectedTask.date) {
        if (selectedTask.date.includes("-")) {
          const parts = selectedTask.date.split("-");
          if (parts[0].length === 2 && parts[2].length === 4) {
            formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
          } else {
            formattedDate = selectedTask.date;
          }
        } else if (selectedTask.date.includes("T")) {
          formattedDate = selectedTask.date.split("T")[0];
        }
      }

      setFormData({
        id: selectedTask.id,
        employee: selectedTask.employee || "",
        date: formattedDate,
        taskPriority: selectedTask.taskPriority || "",
        repeatTask: selectedTask.repeatTask || selectedTask.repeat || "", 
        taskContent: selectedTask.taskContent || "",
      });
    } else {
      setFormData(emptyForm);
    }

    if (!popup) {
      setErrors({});
    }
  }, [mode, selectedTask, popup]);

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
      newErrors.taskPriority = "Please select a task priority";
    }
    if (!formData.repeatTask) {
      newErrors.repeatTask = "Please select repeat task frequency";
    }
    if (!formData.taskContent.trim()) {
      newErrors.taskContent = "Please enter task content";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    if (mode === "edit") {
      dispatch(updateTask(formData));
    } else {
      dispatch(addNewTask(formData));
    }
    setFormData(emptyForm);
    dispatch(closePopup());
  } else {
    console.log("Validation errors:", errors);
  }
};

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ease-in-out ${
        popup
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={() => dispatch(closePopup())}
      />

      <div className="relative flex min-h-screen items-start justify-center lg:items-center p-4">
        <div
          className={`bg-[#2A3B4D] dark:bg-[#1E293B] p-6 rounded-lg shadow-xl border border-[#677483] flex flex-col gap-4 relative w-full max-w-2xl transform transition-all duration-300 ease-out ${
            popup
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-10 scale-95 opacity-0"
          }`}
        >
          <button
            type="button"
            className="text-white text-xl p-1.5 rounded-full bg-black/20 hover:bg-black/50 transition-colors absolute right-4 top-4 cursor-pointer"
            onClick={() => dispatch(closePopup())}
          >
            <IoMdClose />
          </button>

          <p className="text-white text-xl font-semibold">
            {mode === "edit" ? t("form.EditTask") || "Edit Task" : t("form.AddTask")}
          </p>

          <form
            className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 gap-4 text-white"
            onSubmit={handleSubmit}
          >
           
            <div className="flex flex-col gap-1.5">
              <label htmlFor="employee" className="text-sm font-medium">
                {t("form.SelectEmployee")} <span className="text-red-400">*</span>
              </label>
              <select
                id="employee"
                name="employee"
                value={formData.employee}
                onChange={handleChange}
                className={`bg-[#1E293B] text-white border ${
                  errors.employee ? "border-red-500" : "border-gray-500"
                } rounded p-2 focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Employee</option>
                {employees?.map((employee) => (
                  <option key={employee} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
              {errors.employee && (
                <p className="text-red-400 text-xs">{errors.employee}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="date" className="text-sm font-medium">
                {t("form.Date")} <span className="text-red-400">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                className={`bg-[#1E293B] text-white border ${
                  errors.date ? "border-red-500" : "border-gray-500"
                } rounded p-2 focus:outline-none focus:border-blue-500`}
              />
              {errors.date && (
                <p className="text-red-400 text-xs">{errors.date}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="taskPriority" className="text-sm font-medium">
                {t("form.TaskPriority")} <span className="text-red-400">*</span>
              </label>
              <select
                id="taskPriority"
                name="taskPriority"
                value={formData.taskPriority}
                onChange={handleChange}
                className={`bg-[#1E293B] text-white border ${
                  errors.taskPriority ? "border-red-500" : "border-gray-500"
                } rounded p-2 focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Priority</option>
                {taskPriorities?.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
              {errors.taskPriority && (
                <p className="text-red-400 text-xs">{errors.taskPriority}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="repeatTask" className="text-sm font-medium">
                {t("form.RepeatTask")} <span className="text-red-400">*</span>
              </label>
              <select
                id="repeatTask"
                name="repeatTask"
                value={formData.repeatTask}
                onChange={handleChange}
                className={`bg-[#1E293B] text-white border ${
                  errors.repeatTask ? "border-red-500" : "border-gray-500"
                } rounded p-2 focus:outline-none focus:border-blue-500`}
              >
                <option value="">Select Frequency</option>
                {repetTasks?.map((task) => (
                  <option key={task} value={task}>
                    {task}
                  </option>
                ))}
              </select>
              {errors.repeatTask && (
                <p className="text-red-400 text-xs">{errors.repeatTask}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label htmlFor="taskContent" className="text-sm font-medium">
                {t("form.EnterTask")} <span className="text-red-400">*</span>
              </label>
              <textarea
                id="taskContent"
                name="taskContent"
                value={formData.taskContent}
                onChange={handleChange}
                placeholder="Enter task details..."
                className={`bg-[#1E293B] text-white border ${
                  errors.taskContent ? "border-red-500" : "border-gray-500"
                } rounded p-2 min-h-25 focus:outline-none focus:border-blue-500`}
              />
              {errors.taskContent && (
                <p className="text-red-400 text-xs">{errors.taskContent}</p>
              )}
            </div>

            <div className="lg:col-span-2 flex justify-end pt-2">
              <button
                type="submit"
                className="bg-[#008045] hover:bg-[#006635] text-white py-2 px-6 text-base font-bold rounded cursor-pointer transition-colors shadow"
              >
                {mode === "edit" ? "Update Task" : t("form.Submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;