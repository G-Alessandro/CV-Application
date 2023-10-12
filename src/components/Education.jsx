import React from "react"
import { v4 as uuidv4 } from "uuid"

export default function Education() {

  const [personalData, setPersonalData] = React.useState(JSON.parse(localStorage.getItem("userInfo")));

  let objId = uuidv4();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedPersonalData = {
      ...personalData,
      education: {
        ...personalData.education.educationId[objId],
        [name]: value,
      },
    };
    setPersonalData(updatedPersonalData);
    localStorage.setItem("userInfo", JSON.stringify(updatedPersonalData));
  };

  const [addEducation, setAddEducation] = React.useState(false);
  const [educationData, setEducationData] = React.useState(false);

  function handleAddEducation() {
    setAddEducation(!addEducation)
  }

  function handleEducationData() {
    setEducationData(!educationData)
  }


  function educationObj() {
    personalData.education.push({
      educationId: objId,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: ""
    })
  }

  function handleBoth() {
    handleAddEducation();
    handleEducationData();
    educationObj();
  }
  console.log(personalData)

  return (
    <div className="education-container">
      <button onClick={handleAddEducation}>Education</button>
      {addEducation && <button onClick={handleBoth}>+ Education</button>}
      {educationData && <div className="education">
        <label htmlFor="school">School</label>
        <input 
          type="text" 
          id="school"
          value={personalData.education.educationId[objId].school}
          name="school"
          onChange={handleChange}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text" 
          id="degree"
          value={personalData.education.educationId[objId].degree}
          name="degree"
          onChange={handleChange}
        />
        <label htmlFor="start-date">Start Date</label>
        <input 
          type="text" 
          id="start-date"
          value={personalData.education.educationId[objId].startDate}
          name="startDate"
          onChange={handleChange}
        />
        <label htmlFor="end-date">End Date</label>
        <input 
          type="text" 
          id="end-date"
          value={personalData.education.educationId[objId].endDate}
          name="endDate"
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text" 
          id="location"
          value={personalData.education.educationId[objId].location}
          name="location"
          onChange={handleChange}
        />
        <div>
          <button>Delete</button>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>}
    </div>
  )
}
