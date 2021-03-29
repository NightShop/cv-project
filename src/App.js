import GeneralInfo from "./Components/GeneralInfo";
import WorkExperienceSection from "./Components/WorkExperienceSection";
import EducationSection from "./Components/EducationSection";
function App() {
  GeneralInfo.whyDidYouRender = true;
  EducationSection.whyDidYouRender = true;
  WorkExperienceSection.whyDidYouRender = true;


    return (
    <div id="container">
      <GeneralInfo />
      <EducationSection />
      <WorkExperienceSection />
    </div>
  );
}

export default App;
