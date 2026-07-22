import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ListTable from "./ui/ListTable";
const TaskList = () => {
  const { tasks } = useSelector((state) => state.taskList);
  const { t } = useTranslation();
  return (
    <div>
      <p className="py-2 px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-sm lg:text-base text-white font-bold border-2 border-[#14776E] relative">
        {t("table.TaskList")}

        <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
          {tasks.length}
        </span>
      </p>
        <ListTable tasks={tasks} action={true} />
      </div>
  );
};

export default TaskList;
