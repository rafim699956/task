import { Outlet } from "react-router";
import ContentHeader from "./ContentHeader";

const MainContent = () => {
  return (
    <main className="bg-[#161E2B] h-full grow flex flex-col overflow-hidden">
      <ContentHeader />
      <div className="p-4 grow space-y-4 overflow-hidden flex flex-col">
        <Outlet />
      </div>
    </main>
  );
};

export default MainContent;
