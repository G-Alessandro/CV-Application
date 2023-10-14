import React from "react"
import { v4 as uuidv4 } from "uuid"
import SkillsAndCertificatesTemplate from "./SkillsAndCertificatesTemplate";

export default function SkillsAndCertificates() {
  
  const [skillsAndCertificatesData, setSkillsAndCertificatesData] = React.useState([]);
  const [addSkillsAndCertificates, setAddSkillsAndCertificates] = React.useState(true);
  const [newSkillsAndCertificatesData, setNewSkillsAndCertificatesData] = React.useState(false);
  const [skillsAndCertificatesAdded, setSkillsAndCertificatesAdded] = React.useState(true);
  const [showSkillsAndCertificatesBtn, setShowSkillsAndCertificatesBtn] = React.useState(true);
  const [selectedSkillsAndCertificates, setSelectedSkillsAndCertificates] = React.useState(null);

  function handleChange (event) {
    const { name, value } = event.target;
  
    if (skillsAndCertificatesData.length > 0) {
      const updatedSkillsAndCertificatesData = [...skillsAndCertificatesData];
      const lastIndex = skillsAndCertificatesData.length - 1;

      updatedSkillsAndCertificatesData[lastIndex] = {
        ...updatedSkillsAndCertificatesData[lastIndex],
        [name]: value
      };
      setSkillsAndCertificatesData(updatedSkillsAndCertificatesData);
    }
  }

  function skillsAndCertificatesObj() {
    skillsAndCertificatesData.push({
      skillCertificateId: uuidv4(),
      skillCertificate: "",
      description: "",
      saved: false
    })
  }

  function handleAddSkillsAndCertificatesBtn() {
    setAddSkillsAndCertificates(!addSkillsAndCertificates)
    setNewSkillsAndCertificatesData(!newSkillsAndCertificatesData)
    setSkillsAndCertificatesAdded(false);
    skillsAndCertificatesObj();
    setShowSkillsAndCertificatesBtn(false)
  }

  function showSkillsAndCertificatesEdit(skillCertificateId) {
    setSelectedSkillsAndCertificates(skillCertificateId);
    setShowSkillsAndCertificatesBtn(false)
    setAddSkillsAndCertificates(false)
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    const skillCertificateId = selectedSkillsAndCertificates;
  
    const updatedSkillsAndCertificatesData = skillsAndCertificatesData.map(skillsAndCertificates => {
      if (skillsAndCertificates.skillCertificateId === skillCertificateId) {
        return {
          ...skillsAndCertificates,
          [name]: value
        };
      }
      return skillsAndCertificates;
    });
  
    setSkillsAndCertificatesData(updatedSkillsAndCertificatesData);
  }  
  
  function handleEditSave() {
    setSelectedSkillsAndCertificates(null);
    setShowSkillsAndCertificatesBtn(true);
    setAddSkillsAndCertificates(true);
  }

  function handleDeleteEdit() {
    const skillCertificateId = selectedSkillsAndCertificates;
    let updatedSkillsAndCertificatesData = [];

    skillsAndCertificatesData.map(skillsAndCertificates => {
      if(skillsAndCertificates.skillCertificateId !== skillCertificateId) {
        updatedSkillsAndCertificatesData.push(skillsAndCertificates)
      }
    });

    setSkillsAndCertificatesData(updatedSkillsAndCertificatesData);
    setSelectedSkillsAndCertificates(null);
    setShowSkillsAndCertificatesBtn(true);
    setAddSkillsAndCertificates(true);
  }

  function handleCancel() {
    setSkillsAndCertificatesData(prevSkillsAndCertificatesData => {
      const updatedSkillsAndCertificatesData = prevSkillsAndCertificatesData.filter(prevExp => prevExp.saved === true);
      return updatedSkillsAndCertificatesData;
    });
    setAddSkillsAndCertificates(true);
    setSkillsAndCertificatesAdded(true);
    setNewSkillsAndCertificatesData(false);
    setShowSkillsAndCertificatesBtn(true);
  }
  
  function handleSave() {
    setSkillsAndCertificatesData(prevSkillsAndCertificatesData => {
      const lastIndex = prevSkillsAndCertificatesData.length - 1;
      const updatedSkillsAndCertificatesData = [...prevSkillsAndCertificatesData];
      updatedSkillsAndCertificatesData[lastIndex] = {
        ...updatedSkillsAndCertificatesData[lastIndex],
        saved: true
      };
      return updatedSkillsAndCertificatesData;
    });
    setNewSkillsAndCertificatesData(!newSkillsAndCertificatesData);
    setAddSkillsAndCertificates(!addSkillsAndCertificates)
    setSkillsAndCertificatesAdded(!skillsAndCertificatesAdded);
    setShowSkillsAndCertificatesBtn(true);
  }

  console.log(skillsAndCertificatesData)

  return (
    <div>
      <div className="skillsAndCertificates-input-container">
        <button>skillsAndCertificates</button>
        {skillsAndCertificatesData.map(skillsAndCertificates => (
          <div key={skillsAndCertificates.skillCertificateId}>
            {showSkillsAndCertificatesBtn && <button onClick={() => showSkillsAndCertificatesEdit(skillsAndCertificates.skillCertificateId)} key={skillsAndCertificates.skillCertificateId}>{skillsAndCertificates.skillCertificate}</button>}
            {selectedSkillsAndCertificates === skillsAndCertificates.skillCertificateId &&
              <SkillsAndCertificatesTemplate 
                skillsAndCertificatesData={skillsAndCertificates}
                handleDelete={handleDeleteEdit}
                handleCancel={handleEditSave}
                handleSave={handleEditSave}
                handleChange={handleEdit}
            />}
          </div>
        ))}
        {addSkillsAndCertificates && <button onClick={handleAddSkillsAndCertificatesBtn}>+ skillsAndCertificates</button>}
        {newSkillsAndCertificatesData && 
          <SkillsAndCertificatesTemplate 
            skillsAndCertificatesData={skillsAndCertificatesData}
            handleDelete={handleCancel}
            handleCancel={handleCancel}
            handleSave={handleSave}
            handleChange={handleChange}
            index={skillsAndCertificatesData.length - 1}
          /> 
        }
      </div>
      <div className="skillsAndCertificates-data-container">
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
    </div>
  )
}
