import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.taskList);
  const { t } = useTranslation();
  return (
    <div>
      <p className="py-2 px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative">
        {t("table.TaskList")}

        <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
          {tasks.length}
        </span>
      </p>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-center text-white border border-[#677483] overflow-x-auto bg-[#2A3B4D] dark:bg-black/40">
          <thead>
            <tr>
              <th>{t("table.Date")}</th>
              <th>{t("table.ActionId")}</th>
              <th>{t("table.Employee")}</th>
              <th>{t("table.TaskPriority")}</th>
              <th>{t("table.Task")}</th>
              <th>{t("table.Status")}</th>
              <th>{t("table.Action")}</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t border-[#677483]">
                <td>{task.date}</td>
                <td>{task.employee}</td>
                <td>{task.employee}</td>
                <td>{task.taskPriority}</td>
                <td>{task.taskContent}</td>
                <td>{task.status}</td>
                <td>
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2 cursor-pointer">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
