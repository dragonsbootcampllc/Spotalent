import Profile from "./components/Profile/Profile"

function App() {

  return (
    <>
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
