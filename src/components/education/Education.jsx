import React from "react"
import { v4 as uuidv4 } from "uuid"
import EducationTemplate from "./EducationTemplate";

export default function Education() {
  
  const [educationData, setEducationData] = React.useState([]);
  const [addEducation, setAddEducation] = React.useState(true);
  const [newEducationData, setNewEducationData] = React.useState(false);
  const [educationAdded, setEducationAdded] = React.useState(true);
  const [showEducationBtn, setShowEducationBtn] = React.useState(true);
  const [selectedEducation, setSelectedEducation] = React.useState(null);

  function handleChange (event) {
    const { name, value } = event.target;
  
    if (educationData.length > 0) {
      const updatedEducationData = [...educationData];
      const lastIndex = educationData.length - 1;

      updatedEducationData[lastIndex] = {
        ...updatedEducationData[lastIndex],
        [name]: value
      };
      setEducationData(updatedEducationData);
    }
  }

  function educationObj() {
    educationData.push({
      educationId: uuidv4(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      saved: false
    })
  }

  function handleAddEducationBtn() {
    setAddEducation(!addEducation)
    setNewEducationData(!newEducationData)
    setEducationAdded(false);
    educationObj();
    setShowEducationBtn(false)
  }

  function showEducationEdit(educationId) {
    setSelectedEducation(educationId);
    setShowEducationBtn(false)
    setAddEducation(false)
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    const educationId = selectedEducation;
  
    const updatedEducationData = educationData.map(education => {
      if (education.educationId === educationId) {
        return {
          ...education,
          [name]: value
        };
      }
      return education;
    });
  
    setEducationData(updatedEducationData);
  }  
  
  function handleEditSave() {
    setSelectedEducation(null);
    setShowEducationBtn(true);
    setAddEducation(true);
  }

  function handleDeleteEdit() {
    const educationId = selectedEducation;
    let updatedEducationData = [];

    educationData.map(education => {
      if(education.educationId !== educationId) {
        updatedEducationData.push(education)
      }
    });

    setEducationData(updatedEducationData);
    setSelectedEducation(null);
    setShowEducationBtn(true);
    setAddEducation(true);
  }

  function handleCancel() {
    setEducationData(prevEducationData => {
      const updatedEducationData = prevEducationData.filter(prevEdu => prevEdu.saved === true);
      return updatedEducationData;
    });
    setAddEducation(true);
    setEducationAdded(true);
    setNewEducationData(false);
  }
  
  function handleSave() {
    setEducationData(prevEducationData => {
      const lastIndex = prevEducationData.length - 1;
      const updatedEducationData = [...prevEducationData];
      updatedEducationData[lastIndex] = {
        ...updatedEducationData[lastIndex],
        saved: true
      };
      return updatedEducationData;
    });
    setNewEducationData(!newEducationData);
    setAddEducation(!addEducation)
    setEducationAdded(!educationAdded);
    setShowEducationBtn(true)
  }

  console.log(educationData)

  return (
    <div>
      <div className="education-input-container">
        <button>Education</button>
        {educationData.map(education => (
          <div key={education.educationId}>
            {showEducationBtn && <button onClick={() => showEducationEdit(education.educationId)} key={education.educationId}>{education.school}</button>}
            {selectedEducation === education.educationId &&
              <EducationTemplate 
                educationData={education}
                handleDelete={handleDeleteEdit}
                handleCancel={handleEditSave}
                handleSave={handleEditSave}
                handleChange={handleEdit}
            />}
          </div>
        ))}
        {addEducation && <button onClick={handleAddEducationBtn}>+ Education</button>}
        {newEducationData && 
          <EducationTemplate 
            educationData={educationData}
            handleDelete={handleCancel}
            handleCancel={handleCancel}
            handleSave={handleSave}
            handleChange={handleChange}
            index={educationData.length - 1}
          /> 
        }
      </div>
      <div className="education-data-container">
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
    </div>
  )
}
