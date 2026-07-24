import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { toggleSidebar } from "../../app/features/sidebar/sidebarSlice";
import { ScrollArea } from "./ui/scroll-area";

const Aside = () => {
  const { t } = useTranslation();
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const menus = [
    {
      id: 1,
      label: t("sidebar.AddTask"),
      path: "/",
    },
    {
      id: 2,
      label: t("sidebar.ManageTask"),
      path: "/manage-task",
    },
    {
      id: 3,
      label: t("sidebar.TaskReport"),
      path: "/task-report",
    },
    {
      id: 4,
      label: t("sidebar.Settings"),
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`absolute z-10 top-0 left-0 bottom-0 w-10/12 transform ${
        isOpenSidebar ? "translate-x-0" : " -translate-x-full lg:translate-x-0"
      } lg:static bg-[#2A3B4D] dark:bg-black lg:max-w-75 lg:w-full shrink-0 px-5 py-10 transition-all ease-linear duration-300 flex flex-col gap-4 h-screen lg:h-full overflow-hidden`}
    >
      <h3 className="text-2xl font-semibold text-white shrink-0">
        {t("sidebar.Task")}
      </h3>

      <ScrollArea className="flex-1 min-h-0">
        <ul className="pl-2">
          {menus.map((menu) => (
            <li onClick={() => dispatch(toggleSidebar())} key={menu.id}>
              <Link
                className={`py-2 block ${
                  pathname === menu.path
                    ? "text-green-500 font-bold"
                    : "text-white hover:text-green-400 transition-colors"
                }`}
                to={menu.path}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default Aside;
