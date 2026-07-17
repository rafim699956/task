import Aside from "./components/aside";
import MainContent from "./components/MainContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/features/themeMode/themeSlice";
import { toggleSidebar } from "../app/features/sidebar/sidebarSlice";
import { useTranslation } from "react-i18next";

const App = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-3 md:p-4 lg:p-6 bg-[#013214] flex items-center justify-between lg:justify-between">
        <div>
          <button
            className="p-1 rounded text-2xl text-white transition-all ease-linear duration-300 cursor-pointer"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </button>
          <button
            className="p-1 rounded text-2xl text-white transition-all ease-linear duration-300 cursor-pointer"
            onClick={() => i18n.changeLanguage("bn")}
          >
            বাংলা
          </button>
        </div>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-1 rounded text-2xl text-white lg:hidden transition-all ease-linear duration-300"
        >
          {isOpenSidebar ? "✖" : "☰"}
        </button>

        {/*  */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`relative h-8 w-14 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-black/60" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
              darkMode ? "-translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <div className="relative flex grow overflow-hidden">
        <Aside />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
