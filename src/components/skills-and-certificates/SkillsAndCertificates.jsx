import React from "react"
import { v4 as uuidv4 } from "uuid"
import SkillsAndCertificatesTemplate from "./SkillsAndCertificatesTemplate";
import { SkillsAndCertificatesDataContext } from "../../App";

export default function SkillsAndCertificates() {
  
  const {skillsAndCertificatesData, setSkillsAndCertificatesData} = React.useContext(SkillsAndCertificatesDataContext);
  const [addSkillsAndCertificates, setAddSkillsAndCertificates] = React.useState(true);
  const [newSkillsAndCertificatesData, setNewSkillsAndCertificatesData] = React.useState(false);
  const [skillsAndCertificatesAdded, setSkillsAndCertificatesAdded] = React.useState(true);
  const [showSkillsAndCertificatesBtn, setShowSkillsAndCertificatesBtn] = React.useState(true);
  const [selectedSkillsAndCertificates, setSelectedSkillsAndCertificates] = React.useState(false);
  const [notModifiedSkillsAndCertificatesData, setNotModifiedSkillsAndCertificatesData] = React.useState([]);

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
    setNotModifiedSkillsAndCertificatesData(skillsAndCertificatesData)
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
    setSelectedSkillsAndCertificates(false);
    setShowSkillsAndCertificatesBtn(true);
    setAddSkillsAndCertificates(true);
  }

  function handleEditCancel() {
    setSkillsAndCertificatesData(notModifiedSkillsAndCertificatesData);
    setAddSkillsAndCertificates(true);
    setSkillsAndCertificatesAdded(true);
    setNewSkillsAndCertificatesData(false);
    setShowSkillsAndCertificatesBtn(true);
    setSelectedSkillsAndCertificates(false)
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
    setSelectedSkillsAndCertificates(false);
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
    <>
      <div className="skillsAndCertificates-input-container">
        <h2>skillsAndCertificates</h2>
        {skillsAndCertificatesData.map(skillsAndCertificates => (
          <div key={skillsAndCertificates.skillCertificateId}>
            {showSkillsAndCertificatesBtn && <button onClick={() => showSkillsAndCertificatesEdit(skillsAndCertificates.skillCertificateId)} key={skillsAndCertificates.skillCertificateId}>{skillsAndCertificates.skillCertificate}</button>}
            {selectedSkillsAndCertificates === skillsAndCertificates.skillCertificateId &&
              <SkillsAndCertificatesTemplate 
                skillsAndCertificatesData={skillsAndCertificates}
                handleDelete={handleDeleteEdit}
                handleCancel={handleEditCancel}
                handleSave={handleEditSave}
                handleChange={handleEdit}
            />}
          </div>
        ))}
        {addSkillsAndCertificates && <button onClick={handleAddSkillsAndCertificatesBtn} className="add-btn">+ skillsAndCertificates</button>}
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
    </>
  )
}
