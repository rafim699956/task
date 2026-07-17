import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ManageTask = () => {
  const { tasks } = useSelector((state) => state.taskList);
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex gap-1">
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.Todays")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.ThisMonth")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.AllTime")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-center text-white border border-[#677483] overflow-x-auto bg-[#2A3B4D]">
          <thead>
            <tr>
              <th>{t("table.Date")}</th>
              <th>{t("table.ActionId")}</th>
              <th>{t("table.Employee")}</th>
              <th>{t("table.TaskPriority")}</th>
              <th>{t("table.Task")}</th>
              <th>{t("table.Status")}</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t border-[#677483]">
                <td>{task.date}</td>
                <td>{task.employee}</td>
                <td>{task.employee}</td>
                <td>{task.taskPriority}</td>
                <td className="max-w-75 text-wrap sm:text-nowrap">{task.taskContent}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTask;
