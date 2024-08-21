import PersonInfo from "./Componants/PersonInfo";
import ApplicationDet from "./Componants/ApplicationDet";
function App() {
  return (
    <>
      Hi
      <div className="bg-blue-500 text-white p-4">Welcome to my app!</div>
      <div className="flex flex-col gap-4 w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <PersonInfo />
        <ApplicationDet />
      </div>
    </>
  );
}

export default App;
