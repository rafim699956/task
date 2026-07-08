import Aside from "./components/aside";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <div className="py-6 bg-[#013214]"></div>
      <div className="flex grow overflow-hidden">
        <Aside />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
