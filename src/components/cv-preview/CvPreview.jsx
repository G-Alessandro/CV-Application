import React from "react"
import { PersonalDataContext } from "../../App"
import { EducationDataContext } from "../../App";
import { ExperienceDataContext } from "../../App";
import { SkillsAndCertificatesDataContext } from "../../App";

export default function CvPreview() {
  const { personalData } = React.useContext(PersonalDataContext);
  const { educationData } = React.useContext(EducationDataContext);
  const { experienceData } = React.useContext(ExperienceDataContext);
  const { skillsAndCertificatesData } = React.useContext(SkillsAndCertificatesDataContext);

  return (
    <>
      <div className="preview-personal-details">
        <h1>{personalData.firstName} {personalData.lastName}</h1>
        <ul>
          <li>{personalData.firstName}</li>
          <li>{personalData.lastName}</li>
          <li>{personalData.email}</li>
          <li>{personalData.phoneNumber}</li>
          <li>{personalData.address}</li>
        </ul>
      </div>
      <div className="preview-education">
        <h2>Education</h2>
        {educationData.map(education => (
          <div key={education.educationId}>
            <div className="education-period">
              <p>{education.startDate} - {education.endDate}</p>
              <p>{education.location}</p>
            </div>
            <div className="education-info">
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="preview-experience">
        <h2>Professional Experience</h2>
        {experienceData.map(experience => (
          <div key={experience.experienceId}>
            <div className="experience-period">
              <p>{experience.startDate} - {experience.endDate}</p>
              <p>{experience.location}</p>
            </div>
            <div className="experience-info">
              <h3>{experience.companyName}</h3>
              <p>{experience.positionTitle}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="preview-skills-and-certificates">
        <h2>Skills And Certificates</h2>
        <ul>
          {skillsAndCertificatesData.map(skillsAndCertificates => (
            <li key={skillsAndCertificates.skillCertificateId}>
              <h3>{skillsAndCertificates.skillCertificate}</h3>
              <br />
              <p>{skillsAndCertificates.description}</p> 
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}