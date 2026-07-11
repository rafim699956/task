import { useSelector } from "react-redux";

const ManageTask = () => {
  const { activeTab } = useSelector((state) => state.tab);
  return (
    <div className="bg-[#C6D9E7] p-1 flex justify-between items-center">
      <h2 className="text-2xl text-[#00040D] font-bold">{activeTab}</h2>
      {activeTab === "Add Task" && (
        <button className="bg-[#017F48] py-1 px-6 text-white font-semibold text-base rounded cursor-pointer">
          Add Task
        </button>
      )}
    </div>
  );
};

export default ManageTask;
