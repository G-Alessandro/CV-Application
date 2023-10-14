import UserInformation from "./components/UserInformation"
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience"
import SkillsAndCertificates from "./components/skills-and-certificates/SkillsAndCertificates";

export default function App() {
  return (
    <div className="main-container">
      <UserInformation />
      <Education />
      <Experience />
      <SkillsAndCertificates />
    </div>
  )
}
