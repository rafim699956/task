import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../app/features/sidebar/sidebarSlice";
import { toggleTheme } from "../app/features/themeMode/themeSlice";
import { changeLanguage } from "../app/features/language/languageSlice";
import Aside from './components/Aside'
import MainContent from './components/MainContent'
const Layout = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const handleLanguage = (lang) => {
    dispatch(changeLanguage(lang));
    i18n.changeLanguage(lang);
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);
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
        <div className="flex items-center gap-1">
          <button
            className="text-sm lg:text-base text-white cursor-pointer"
            onClick={() => handleLanguage("en")}
          >
            En
          </button>
          <span className="text-sm lg:text-base text-white">/</span>
          <button
            className="text-sm lg:text-base text-white cursor-pointer"
            onClick={() => handleLanguage("bn")}
          >
            bn
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
              !darkMode ? "-translate-x-7" : "translate-x-1"
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

export default Layout;
