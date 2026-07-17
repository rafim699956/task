import { Outlet } from "react-router";
import ContentHeader from "./ContentHeader";

const MainContent = () => {
  return (
    <main className="bg-[#161E2B] h-full grow flex flex-col overflow-hidden">
      <ContentHeader />
      <div className="p-4 grow overflow-y-auto space-y-4">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
