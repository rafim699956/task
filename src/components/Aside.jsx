import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../app/features/tab/tabSlice";

const Aside = () => {
  const { tabs, activeTab } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  return (
    <aside className="bg-[#2A3B4D] dark:bg-black h-full max-w-75 w-full shrink-0 px-5 py-10">
      <h3 className="text-2xl font-semibold text-white mb-4">Task</h3>
      <ul className="pl-2">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`py-2 cursor-pointer ${
              activeTab === tab ? "text-green-500 font-bold" : "text-white"
            }`}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
