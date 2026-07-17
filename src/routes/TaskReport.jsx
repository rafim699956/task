import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../app/features/tasklist/tasklistSlice";
const TaskReport = () => {
  const { tasks } = useSelector((state) => state.taskList);
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
    <div className="h-full flex">
      <div className="flex flex-col gap-4 p-2 border border-gray-50 rounded-md lg:w-1/4 w-full h-full">
        <input
          className="border-0 rounded-md p-2 bg-[#556370] text-white text-base font-semibold placeholder:text-white"
          type="text"
          placeholder="Search"
        />

        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex md:items-center gap-2 md:gap-3">
              {/* Avatar */}
              <div className="shrink-0 size-6 md:size-10 bg-[#FF00FA] rounded-full mt-1 md:mt-0"></div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                  <h2 className="text-white font-bold text-sm md:text-lg truncate">
                    {task.employee}
                  </h2>

                  <span className="size-3 rounded-full bg-red-700"></span>

                  <span className="text-white font-semibold text-xs lg:text-sm whitespace-nowrap hidden sm:block">
                    4:22 PM
                  </span>
                </div>

                <p className="text-xs md:text-base text-white/40 line-clamp-1">{task.taskContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grow flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 px-2 md:px-4">
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg inline-flex flex-col md:flex-row gap-3 lg:gap-4">
            <div className="bg-white rounded border size-10 lg:size-20 shrink-0 md:self-center"></div>
            <div className="lg:space-y-2">
              <h2 className="text-[#C5C8D3] text-sm lg:text-2xl font-bold">
                Nawaz Mia
              </h2>
              <p className="text-[#C5C8D3] text-xs lg:text-base">
                Senior Waiter
              </p>
              <p className="text-[#C5C8D3] text-xs lg:text-base">Food Garden</p>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base">Task</p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                100
              </h2>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base">Pending Task</p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                25
              </h2>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base">
              Complete Task %
            </p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                75%
              </h2>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col justify-end overflow-y-hidden">
          <div className="px-2 md:px-5 py-2 space-y-3 overflow-y-auto">
            <div className="bg-[#293C4B] rounded-lg p-3 space-y-3">
              <div className="flex items-center gap-4">
                <p className="bg-[#476673] py-1 px-2 rounded-3xl text-white font-semibold text-xs lg:text-base">
                  25-06-2026
                </p>
                <h4 className="text-[#7D868D] text-sm lg:text-base font-bold">
                  Noyon
                </h4>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="space-y-4">
                  <p className="text-sm lg:text-lg font-bold text-white">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                  <p className="text-sm lg:text-lg font-bold text-white">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  <p className="text-xs lg:text-base font-bold text-white">
                    High Priority
                  </p>
                  <p className="text-xs lg:text-base font-bold text-white">
                    Pending
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#293C4B] rounded-lg p-3 space-y-3">
              <div className="flex items-center gap-4">
                <p className="bg-[#476673] py-1 px-2 rounded-3xl text-white font-semibold text-xs lg:text-base">
                  25-06-2026
                </p>
                <h4 className="text-[#7D868D] text-sm lg:text-base font-bold">
                  Noyon
                </h4>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="space-y-4">
                  <p className="text-sm lg:text-lg font-bold text-white">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                  <p className="text-sm lg:text-lg font-bold text-white">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  <p className="text-xs lg:text-base font-bold text-white">
                    High Priority
                  </p>
                  <p className="text-xs lg:text-base font-bold text-white">
                    Pending
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 md:py-4 px-2 md:px-3 border-t border-[#183B4D] bg-[#0D2239]">
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                <div className="flex flex-col gap-2">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onClick={(e) => e.target.showPicker()}
                    className={`border ${errors.date ? "border-red-500" : "border-gray-300"} rounded p-2`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
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
                    <p className="text-red-500 text-sm">
                      {errors.taskPriority}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
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
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col gap-2 col-span-2 grow">
                  <textarea
                    id="taskContent"
                    name="taskContent"
                    value={formData.taskContent}
                    onChange={handleChange}
                    placeholder="EnterTask"
                    className={`border ${errors.taskContent ? "border-red-500" : "border-gray-300"} rounded p-2 min-h-8`}
                  />
                  {errors.taskContent && (
                    <p className="text-red-500 text-sm">{errors.taskContent}</p>
                  )}
                </div>

                <div className="lg:col-span-2 flex gap-4">
                  <button
                    type="submit"
                    className="bg-[#008045] text-white py-2 px-3 md:px-6 text-xs md:text-base font-bold rounded cursor-pointer hover:bg-[#006635] transition-colors dark:bg-[#008045] dark:hover:bg-[#006635]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskReport;
