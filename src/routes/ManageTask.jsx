import ListTable from "../components/ui/ListTable";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ManageTask = () => {
  const { tasks } = useSelector((state) => state.taskList);
  const { t } = useTranslation();
  return (
    <div>
      {/* <div className="flex gap-1">
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.Todays")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.ThisMonth")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
        <p className="py-2 px-3 lg:px-10 rounded rounded-br-none rounded-bl-none bg-[#013214] inline-block text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base">
          {t("table.AllTime")}
          <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </p>
      </div> */}
      <Tabs defaultValue="overview">
        <TabsList className="bg-transparent flex gap-1">
          <TabsTrigger className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base" value={t("table.Todays")}>{t("table.Todays")}</TabsTrigger>
          <TabsTrigger className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base" value={t("table.ThisMonth")}> {t("table.ThisMonth")}</TabsTrigger>
          <TabsTrigger className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base" value={t("table.AllTime")}>{t("table.AllTime")}</TabsTrigger>
        </TabsList>
        <TabsContent value={t("table.Todays")}>
          <ListTable tasks={tasks} />
        </TabsContent>
        <TabsContent value={t("table.ThisMonth")}>
          <ListTable tasks={tasks} action={true} />
        </TabsContent>
        <TabsContent value={t("table.AllTime")}>
          <ListTable tasks={tasks} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageTask;
