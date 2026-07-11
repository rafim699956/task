import { useSelector } from "react-redux";
import ManageTask from "./ManageTask";
import AddTaskTabContent from "./AddTaskTabContent";
import ManageTaskTabContent from "./ManageTaskTabContent";
import TaskReportTabContent from "./TaskReportTabContent";
import SettingsTabContent from "./SettingsTabContent";

const MainContent = () => {
  const { activeTab } = useSelector((state) => state.tab);
  return (
    <main className="bg-[#161E2B] h-full grow flex flex-col overflow-hidden">
      <ManageTask />
      <div className="p-4 grow overflow-y-auto space-y-4">
        {activeTab === "Add Task" && <AddTaskTabContent />}
        {activeTab === "Manage Task" && <ManageTaskTabContent />}
        {activeTab === "Task Report" && <TaskReportTabContent />}
        {activeTab === "Settings" && <SettingsTabContent />}
      </div>
    </main>
  );
};

export default MainContent;
