import JobsView from './Components/JobsView/Jobsview';
import Profile from "./components/Profile/Profile";

function App() {

  return (
    <>
      Hi
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <JobsView />
      </div>
      <Profile
      name="First last name"
      jobTilte="Web developer"
      profileImage="https://via.placeholder.com/150"
      bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
      country="Egypt"
      experience="5 years in web development"
      certificates={["Certified React Developer", "Certified JavaScript Specialist"]}
      projects={["E-commrence cross platform ", "E-commrence cross platform ", "E-commrence cross platform "]}
      skills={["JavaScript", "React", "TypeScript", "CSS", "HTML"]}
      cvLink="https://example.com/john-doe-cv.pdf"
    />
    </>
  )
}

export default App
