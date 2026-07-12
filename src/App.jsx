import Aside from "./components/aside";
import MainContent from "./components/MainContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/features/themeMode/themeSlice";

const App = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  console.log(darkMode);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-6 bg-[#013214] flex items-center justify-end">
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
      <div className="flex grow overflow-hidden">
        <Aside />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
