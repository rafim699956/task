import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../app/features/tab/tabSlice";

const Aside = () => {
  const { tabs, activeTab } = useSelector((state) => state.tab);
  const isOpenSidebar  = useSelector((state) => state.sidebar.isOpenSidebar);
  const dispatch = useDispatch();
  return (
    <aside className={`absolute z-10 top-0 left-0 bottom-0 w-10/12 transform ${!isOpenSidebar ? '-translate-x-full' : 'translate-x-0'} lg:static bg-[#2A3B4D] dark:bg-black/40 h-full lg:max-w-75 lg:w-full shrink-0 px-5 py-10 transition-all ease-linear duration-300`}>
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
