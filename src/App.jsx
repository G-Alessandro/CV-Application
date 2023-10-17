import React from "react"
import ResumeExample from "./components/resume-example/ResumeExample"
import GeneralInformation from "./components/general-information/GeneralInformation"
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience"
import SkillsAndCertificates from "./components/skills-and-certificates/SkillsAndCertificates";
import CvPreview from "./components/cv-preview/CvPreview";

export const PersonalDataContext = React.createContext(null);
export const EducationDataContext = React.createContext(null);
export const ExperienceDataContext = React.createContext(null);
export const SkillsAndCertificatesDataContext = React.createContext(null);

export default function App() {

  const [personalData, setPersonalData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: ""
  });
  
  const [educationData, setEducationData] = React.useState([]);
  const [experienceData, setExperienceData] = React.useState([]);
  const [skillsAndCertificatesData, setSkillsAndCertificatesData] = React.useState([]);


  return (
    <div className="main-container">
      <PersonalDataContext.Provider value={{ personalData, setPersonalData }}>
        <EducationDataContext.Provider value={{ educationData, setEducationData }}>
          <ExperienceDataContext.Provider value={{ experienceData, setExperienceData }}>
            <SkillsAndCertificatesDataContext.Provider value={{ skillsAndCertificatesData, setSkillsAndCertificatesData }}>
              <div className="input-container">
                <ResumeExample />
                <GeneralInformation />
                <Education />
                <Experience />
                <SkillsAndCertificates />
              </div>
              <CvPreview />
            </SkillsAndCertificatesDataContext.Provider>
          </ExperienceDataContext.Provider>
        </EducationDataContext.Provider>
      </PersonalDataContext.Provider>
    </div>
  )
}
