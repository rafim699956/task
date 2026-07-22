import { openAddPopup } from "../../app/features/popup/popupSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Button } from "./ui/button";
const ContentHeader = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="bg-[#C6D9E7] p-1 flex justify-between items-center">
      <h2 className=" text-sm md:text-xl lg:text-2xl text-[#00040D] font-bold">
        {pathname === "/task-report"
          ? t("sidebar.AddTask")
          : t("sidebar.ManageTask")}
      </h2>
      {pathname === "/" && (
        <Button
          size="sm"
          onClick={() => dispatch(openAddPopup())}
          className="bg-[#017F48] py-4 px-5 text-white font-semibold text-sm lg:text-base rounded cursor-pointer"
        >{t("sidebar.AddTask")}</Button>
      )}
    </div>
  );
};

export default ContentHeader;
