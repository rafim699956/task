import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../app/features/tasklist/tasklistSlice";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select.jsx";
import { ScrollArea } from "../components/ui/scroll-area.jsx";
import { Field } from "../components/ui/field.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { useTranslation } from "react-i18next";
import { Popover, PopoverTrigger } from "../components/ui/popover.jsx";
import { Button } from "../components/ui/button.jsx";
import { Calendar, CalendarIcon } from "lucide-react";
import { PopoverContent } from "../components/ui/popover";

const TaskReport = () => {
  const { t } = useTranslation();
  const { tasks } = useSelector((state) => state.taskList);
  const taskPriorities = useSelector((state) => state.taskPriority);
  const repetTasks = useSelector((state) => state.repetTask);
  const dispatch = useDispatch();

  const [date, setDate] = useState(undefined);
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

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    const formattedDateString = selectedDate?.from
      ? format(selectedDate.from, "yyyy-MM-dd")
      : "";

    updateField("date", formattedDateString);
  };

  const updateField = (name, value) => {
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
      <div className="flex flex-col gap-4 p-1 sm:p-2 sm:border border-gray-50 rounded-md w-16 md:w-1/4 h-full overflow-hidden">
        <input
          className="border-0 rounded-md sm:p-2 bg-[#556370] text-white text-base font-semibold placeholder:text-white hidden md:block"
          type="text"
          placeholder="Search"
        />
        <ScrollArea className="flex-1 min-h-0">
          <div className="flex flex-col gap-4 overflow-y-auto items-center md:items-stretch">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-2 md:gap-3">
                <div className="shrink-0 size-8 md:size-10 bg-[#FF00FA] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-base">
                  {task.employee?.charAt(0) || "U"}
                </div>

                <div className="flex-1 min-w-0 hidden md:block">
                  <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2">
                    <h2 className="text-white font-bold text-sm md:text-lg truncate">
                      {task.employee}
                    </h2>

                    <span className="size-3 rounded-full bg-red-700"></span>
                    <span className="text-white font-semibold text-xs lg:text-sm whitespace-nowrap hidden sm:block">
                      4:22 PM
                    </span>
                  </div>

                  <p className="text-xs md:text-base text-white/40 line-clamp-1">
                    {task.taskContent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="grow flex flex-col min-w-0">
        <div className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 px-2 md:px-4 hidden sm:grid">
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col md:flex-row gap-2 lg:gap-4">
            <div className="bg-white rounded border size-10 lg:size-20 shrink-0 self-center overflow-hidden">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="dog image"
                className="w-full max-w-full object-cover h-auto"
              />
            </div>
            <div className="lg:space-y-1 text-center md:text-left">
              <h2 className="text-[#C5C8D3] text-sm lg:text-2xl font-bold">
                Nawaz Mia
              </h2>
              <div>
                <p className="text-[#C5C8D3] text-xs lg:text-base">
                  Senior Waiter
                </p>
                <p className="text-[#C5C8D3] text-xs lg:text-base">
                  Food Garden
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
              Task
            </p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                100
              </h2>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
              Pending Task
            </p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                25
              </h2>
            </div>
          </div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
            <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
              Complete Task %
            </p>
            <div className="flex items-center justify-center grow">
              <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                75%
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-[#20283A] bg-[#090D26] p-2 md:p-3 rounded-lg flex justify-between gap-1 lg:hidden">
            <div className="bg-white rounded-full border size-10 lg:size-20 shrink-0 self-center overflow-hidden">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="dog image"
                className="w-full max-w-full object-cover h-auto"
              />
            </div>
            <div className="bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
              <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
                Task
              </p>
              <div className="flex items-center justify-center grow">
                <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                  100
                </h2>
              </div>
            </div>
            <div className="bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
              <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
                Pend...
              </p>
              <div className="flex items-center justify-center grow">
                <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                  25
                </h2>
              </div>
            </div>
            <div className="bg-[#090D26] p-2 md:p-3 rounded-lg flex flex-col">
              <p className="text-[#C5C8D3] text-xs lg:text-base text-center md:text-left">
                Compl...
              </p>
              <div className="flex items-center justify-center grow">
                <h2 className="text-[#C5C8D3] text-lg lg:text-2xl font-bold">
                  75%
                </h2>
              </div>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 min-h-0 px-2 md:px-5 py-2">
          <div className="flex flex-col justify-end gap-4 h-full">
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
                <div className="space-y-1">
                  <p className="text-sm lg:text-base font-semibold text-white wrap-break-words">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                  <p className="text-sm lg:text-base font-semibold text-white wrap-break-words">
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
                <div className="space-y-1">
                  <p className="text-sm lg:text-base font-semibold text-white wrap-break-word">
                    Dupur 5 Tar Vitore 25 box beriany complete korte hobe dupur
                    5 tar vitore 25
                  </p>
                  <p className="text-sm lg:text-base font-semibold text-white wrap-break-word">
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
        </ScrollArea>

        <div className="py-3 md:py-4 px-2 md:px-3 border-t border-[#183B4D] bg-[#0D2239]">
          <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {/* Date Picker */}
              <div className="flex flex-col gap-2">
                <Field>
                  <Popover>
                    <PopoverTrigger
                      render={
                        <Button
                          variant="outline"
                          id="date-picker-range"
                          className={`justify-start px-2.5 font-normal bg-[#1E293B] text-white w-full ${
                            errors.date ? "border-red-500" : "border-gray-500"
                          } rounded p-2 focus:outline-none focus:border-blue-500 text-xs sm:text-sm`}
                        >
                          <CalendarIcon
                            data-icon="inline-start"
                            className="mr-2 h-4 w-4"
                          />
                          <span className="truncate">
                            {date?.from ? (
                              date.to && date.to !== date.from ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>{t("form.Date")}</span>
                            )}
                          </span>
                        </Button>
                      }
                    />
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={handleDateChange}
                        numberOfMonths={1}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
                {errors.date && (
                  <p className="text-red-400 text-xs">{t("form.error.date")}</p>
                )}
              </div>

              {/* Task Priority */}
              <div className="flex flex-col gap-2">
                <Select
                  items={taskPriorities}
                  value={formData.taskPriority}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      taskPriority: value,
                    }))
                  }
                >
                  <SelectTrigger
                    className={`bg-[#1E293B] text-white border w-full ${
                      errors.taskPriority ? "border-red-500" : "border-gray-500"
                    } rounded p-2 focus:outline-none focus:border-blue-500 text-xs sm:text-sm`}
                  >
                    <SelectValue placeholder={t("form.TaskPriority")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {taskPriorities.map((priority) => (
                        <SelectItem
                          key={priority}
                          value={priority}
                          className="text-black text-base font-semibold p-1"
                        >
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.taskPriority && (
                  <p className="text-red-400 text-xs">
                    {t("form.error.priority")}
                  </p>
                )}
              </div>

              {/* Repeat Task */}
              <div className="flex flex-col gap-2">
                <Select
                  items={repetTasks}
                  value={formData.repeatTask}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      repeatTask: value,
                    }))
                  }
                >
                  <SelectTrigger
                    className={`bg-[#1E293B] text-white border w-full ${
                      errors.repeatTask ? "border-red-500" : "border-gray-500"
                    } rounded p-2 focus:outline-none focus:border-blue-500 text-xs sm:text-sm`}
                  >
                    <SelectValue placeholder={t("form.RepeatTask")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {repetTasks.map((repetTask) => (
                        <SelectItem
                          key={repetTask}
                          value={repetTask}
                          className="text-black text-base font-semibold p-1"
                        >
                          {repetTask}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.repeatTask && (
                  <p className="text-red-400 text-xs">
                    {t("form.error.repeat")}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
              <div className="flex flex-col gap-2 flex-1">
                <Textarea
                  onChange={(e) => updateField("taskContent", e.target.value)}
                  value={formData.taskContent}
                  placeholder={t("form.EnterTask")}
                  className={`bg-[#1E293B] text-white border ${
                    errors.taskContent ? "border-red-500" : "border-gray-500"
                  } rounded p-2 min-h-20 sm:min-h-25 focus:outline-none focus:border-blue-500 w-full text-xs sm:text-sm`}
                />
                {errors.taskContent && (
                  <p className="text-red-400 text-xs">
                    {t("form.error.content")}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#008045] text-white py-2 px-4 md:px-6 text-xs md:text-base font-bold rounded cursor-pointer hover:bg-[#006635] transition-colors dark:bg-[#008045] dark:hover:bg-[#006635] whitespace-nowrap self-start sm:self-center w-full sm:w-auto"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskReport;
