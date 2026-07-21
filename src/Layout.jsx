import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../app/features/sidebar/sidebarSlice";
import { toggleTheme } from "../app/features/themeMode/themeSlice";
import { changeLanguage } from "../app/features/language/languageSlice";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import { RxHamburgerMenu } from "react-icons/rx";
import ReactCountryFlag from "react-country-flag";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import TaskForm from "./components/TaskForm";
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

  const language = i18n.language;
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-3 md:p-4 lg:p-6 bg-[#013214] flex items-center justify-end gap-4">
        <div className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 text-white text-lg lg:text-xl">
                <ReactCountryFlag
                  countryCode={language === "en" ? "US" : "BD"}
                  svg
                  className="size-6"
                />
                {language.toUpperCase()}
                <FaAngleDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleLanguage("en")}>
                  <ReactCountryFlag countryCode="US" svg className="size-6" />
                  EN
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => handleLanguage("bn")}>
                  <ReactCountryFlag countryCode="BD" svg className="size-6" />
                  বাংলা
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-1 rounded text-2xl text-white lg:hidden transition-all ease-linear duration-300"
        >
          {isOpenSidebar ? (
            <IoIosClose className="text-2xl size-6" />
          ) : (
            <RxHamburgerMenu className="text-2xl size-6" />
          )}
        </button>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="rounded-md p-2 hover:bg-accent"
        >
          {toggleTheme ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="relative flex grow overflow-hidden">
        <Aside />
        <MainContent />
        <TaskForm />
      </div>
    </div>
  );
};

export default Layout;
