import ApplicationForm from "../Components/Application_form";
import ApplicationDet from "../Components/ApplicationDet";
import AppQs from "../Components/ApplicationQs/AppQs";
import Form from "../Components/Form";
import MyJobPosts from "../Components/HomePageForRecuiters/MyJobPosts";
import JobsAppView from "../Components/JobAppView/JobAppView";
import JobsView from "../Components/JobAppView/JobAppView";
import JobsPost from "../Components/JobPost/JobsPost";
import PersonInfo from "../Components/PersonInfo";
import NewPost from "../Components/Post";
import Profile from "../Components/profile/Profile";
import TrackApplications from "../Components/TrackApplications/TrackApps";
import FillApplication from './../Components/Application';

import ProfileData from "../Data/Profile";
function App() {
  return (
    <>
      <div className="flex flex-col gap-80">
        <ApplicationDet/>
        <PersonInfo/>
        <JobsPost />
        <JobsView />
        <JobsAppView />
        <AppQs />
        <Profile {...ProfileData}/>
        <TrackApplications/>
        <Form/>
        <ApplicationForm/>
        <FillApplication />
        <NewPost/> 
        <MyJobPosts/>
    </div>
    </>
  );
}
export default App;
