import JobsView from './Components/JobsView/Jobsview';
import Profile from "./components/Profile/Profile";
import PrfileData from "./Data/Profile.json";

function App() {

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <JobsView />
      </div>
      <Profile
      {...PrfileData}
    />
    </>
  )
}

export default App
