import React from "react"
import { v4 as uuidv4 } from "uuid"
import { PersonalDataContext } from "../../App"
import { EducationDataContext } from "../../App";
import { ExperienceDataContext } from "../../App";
import { SkillsAndCertificatesDataContext } from "../../App";
import DeleteSvg from "../../icons/delete.svg"
import LoadSvg from "../../icons/upload.svg"

export default function CvPreview() {
  const { setPersonalData } = React.useContext(PersonalDataContext);
  const { setEducationData } = React.useContext(EducationDataContext);
  const { setExperienceData } = React.useContext(ExperienceDataContext);
  const { setSkillsAndCertificatesData } = React.useContext(SkillsAndCertificatesDataContext);

  function handleLoadResumeExample() {
    setPersonalData({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main Street, City, Country"
    });
    setEducationData([
      {
        educationId: uuidv4(),
        school: "High School Name",
        degree: "High School Diploma",
        startDate: "1 January 2016",
        endDate: "31 December 2020",
        location: "City, State",
        saved: true
      },
      {
        educationId: uuidv4(),
        school: "University Name",
        degree: "Bachelor's Degree in Computer Science",
        startDate: "1 January  2020",
        endDate: "31 December 2024",
        location: "City, State",
        saved: true
      }      
    ]);
    setExperienceData([
      {
        experienceId: uuidv4(),
        companyName: "ABC Company",
        positionTitle: "Software Developer",
        startDate: "1 January 2018",
        endDate: "15 March 2020",
        location: "City, State",
        description: "In my role at ABC Company, I worked as a software developer and was responsible for developing complex web applications using technologies such as React and Node.js. I collaborated in cross-functional teams to create innovative software solutions. During my time here, I gained significant skills in designing, developing, and maintaining web applications.",
        saved: true
      },
      {
        experienceId: uuidv4(),
        companyName: "XYZ Corporation",
        positionTitle: "Product Manager",
        startDate: "5 May 2020",
        endDate: "20 July 2022",
        location: "City, State",
        description: "As a Product Manager at XYZ Corporation, I oversaw the entire product lifecycle from conception to delivery. I successfully managed complex product development projects and collaborated with technical, marketing, and sales teams to ensure the product's success in the market. During my tenure, I contributed to improving product development processes and achieved significant revenue growth.",
        saved: true
      },
      {
        experienceId: uuidv4(),
        companyName: "123 Tech Solutions",
        positionTitle: "Data Analyst",
        startDate: "10 September 2022",
        endDate: "5 June 2023",
        location: "City, State",
        description: "As a Data Analyst at 123 Tech Solutions, I worked on data collection, analysis, and interpretation to provide critical insights for business strategy. I used advanced analytical tools to identify trends and improvement opportunities. During my tenure, I contributed to optimizing business processes and making data-driven, informed decisions. My experience as a Data Analyst was instrumental in the company's success.",
        saved: true
      }      
    ]);
    setSkillsAndCertificatesData([
      {
        skillCertificateId: uuidv4(),
        skillCertificate: "Web Development",
        description: "Proficient in front-end and back-end web development. Skilled in HTML, CSS, JavaScript, React, Node.js, and database management. Experienced in building responsive and user-friendly web applications.",
        saved: true
      },
      {
        skillCertificateId: uuidv4(),
        skillCertificate: "Data Analysis",
        description: "Experienced data analyst with a strong background in data collection, interpretation, and visualization. Proficient in using data analysis tools and creating actionable insights. Strong problem-solving and critical thinking skills.",
        saved: true
      },
      {
        skillCertificateId: uuidv4(),
        skillCertificate: "AWS Certified Solutions Architect - Associate",
        description: "Certified AWS Solutions Architect with expertise in designing and implementing scalable and cost-effective cloud solutions. Proficient in AWS services and best practices for architecture design.",
        saved: true
      },
      {
        skillCertificateId: uuidv4(),
        skillCertificate: "Certified ScrumMaster (CSM)",
        description: "Certified ScrumMaster with a deep understanding of the Scrum framework and agile methodologies. Experienced in facilitating Scrum ceremonies and promoting agile practices within teams.",
        saved: true
      },
      {
        skillCertificateId: uuidv4(),
        skillCertificate: "Google Analytics Certification",
        description: "Google Analytics certified professional with expertise in web analytics and data-driven decision-making. Proficient in setting up tracking, analyzing data, and generating actionable insights for businesses.",
        saved: true
      }                
    ]);
  }

  function handleClearResume() {
    setPersonalData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: ""
    });
    setEducationData([]);
    setExperienceData([]);
    setSkillsAndCertificatesData([]);
  }

  return (
    <div className="resume-example-container">
      <button onClick={handleClearResume} className="clear-resume-btn resume-example-btn"><img className="delete-btn-svg" src={DeleteSvg}/>Clear Resume</button>
      <button onClick={handleLoadResumeExample} className="load-resume-btn resume-example-btn"><img className="delete-btn-svg" src={LoadSvg}/>Load Example</button>
    </div>
  )

}