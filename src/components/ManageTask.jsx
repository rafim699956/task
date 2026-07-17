import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
const ManageTask = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <div className="bg-[#C6D9E7] p-1 flex justify-between items-center">
      <h2 className=" text-sm md:text-xl lg:text-2xl text-[#00040D] font-bold">
        {pathname === "/task-report"
          ? t("sidebar.AddTask")
          : t("sidebar.ManageTask")}
      </h2>
      {pathname === "/" && (
        <button className="bg-[#017F48] py-1 px-6 text-white font-semibold text-sm lg:text-base rounded cursor-pointer">
          {t("sidebar.AddTask")}
        </button>
      )}
    </div>
  );
};

export default ManageTask;
