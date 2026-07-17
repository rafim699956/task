import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useTranslation } from "react-i18next";

const AddTask = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-[#2A3B4D] dark:bg-black/40 py-3 px-4 rounded-lg shadow-md border border-[#677483] flex flex-col gap-4">
        <p className="text-white text-xl font-semibold">{t("form.AddTask")}</p>
        <TaskForm />
      </div>
      <TaskList />
    </>
  );
};

export default AddTask;
