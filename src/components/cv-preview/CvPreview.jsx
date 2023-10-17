import React from "react"
import { PersonalDataContext } from "../../App"
import { EducationDataContext } from "../../App";
import { ExperienceDataContext } from "../../App";
import { SkillsAndCertificatesDataContext } from "../../App";
import EmailSvg from "../../icons/email.svg";
import SmartphoneSvg from "../../icons/smartphone.svg";
import LocationSvg from "../../icons/map-marker.svg";

export default function CvPreview() {
  const { personalData } = React.useContext(PersonalDataContext);
  const { educationData } = React.useContext(EducationDataContext);
  const { experienceData } = React.useContext(ExperienceDataContext);
  const { skillsAndCertificatesData } = React.useContext(SkillsAndCertificatesDataContext);

  return (
    <div className="preview">
      <div className="preview-personal-details">
        <h1>{personalData.firstName} {personalData.lastName}</h1>
        <div className="preview-personal-info-container">
          <div className="preview-personal-info">{personalData.email && <img className="preview-personal-svg" src={EmailSvg}/>}{personalData.email}</div>
          <div className="preview-personal-info">{personalData.phoneNumber && <img className="preview-personal-svg" src={SmartphoneSvg}/>}{personalData.phoneNumber}</div>
          <div className="preview-personal-info">{personalData.address && <img className="preview-personal-svg" src={LocationSvg}/>}{personalData.address}</div>
        </div>
      </div>
      <div className="preview-education">
        {educationData.length > 0 && <div className="preview-title">Education</div>}
        {educationData.map(education => (
          <div className="education-container" key={education.educationId}>
            <div className="education-period">
              <p>{education.startDate} {education.endDate ? ` - ${education.endDate}` : ''}</p>
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
        {experienceData.length > 0 && <div className="preview-title">Professional Experience</div>}
        {experienceData.map(experience => (
          <div className="experience-container" key={experience.experienceId}>
            <div className="experience-period">
              <p>{experience.startDate} {experience.endDate ? `- ${experience.endDate}` : ''}</p>
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
      <div className="preview-skills-and-certificates-container">
        {skillsAndCertificatesData.length > 0 && <div className="preview-title">Skills And Certificates</div>}
          {skillsAndCertificatesData.map(skillsAndCertificates => (
            <div className="preview-skills-and-certificates" key={skillsAndCertificates.skillCertificateId}>
              <h3>{skillsAndCertificates.skillCertificate}</h3>
              <p>{skillsAndCertificates.description}</p> 
            </div>
          ))}
      </div>
    </div>
  )
}