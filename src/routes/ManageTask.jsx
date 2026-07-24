import ListTable from "../components/ui/ListTable";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area.jsx";

const ManageTask = () => {
  const { tasks } = useSelector((state) => state.taskList);
  const { t } = useTranslation();
  return (
    <ScrollArea className="flex-1 min-h-0">
      <Tabs defaultValue="overview" className="pt-4">
        <TabsList className="bg-transparent flex gap-1">
          <TabsTrigger
            className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base"
            value={t("table.Todays")}
          >
            {t("table.Todays")}
            <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
              {tasks.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base"
            value={t("table.ThisMonth")}
          >
            {" "}
            {t("table.ThisMonth")}
            <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
              {tasks.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="p-4 lg:px-10 bg-[#013214] text-white font-bold border-2 border-[#14776E] relative text-xs lg:text-base"
            value={t("table.AllTime")}
          >
            {t("table.AllTime")}
            <span className="absolute top-0 right-0 bg-white text-[#4B504C] p-2 rounded-full transform -translate-y-1/2 size-6 flex items-center justify-center">
              {tasks.length}
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={t("table.Todays")}>
          <ListTable tasks={tasks} />
        </TabsContent>
        <TabsContent value={t("table.ThisMonth")}>
          <ListTable tasks={tasks} />
        </TabsContent>
        <TabsContent value={t("table.AllTime")}>
          <ListTable tasks={tasks} />
        </TabsContent>
      </Tabs>
    </ScrollArea>
  );
};

export default ManageTask;
