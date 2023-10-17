import React from "react"
import { v4 as uuidv4 } from "uuid"
import ExperienceTemplate from "./ExperienceTemplate";
import { ExperienceDataContext } from "../../App";
import ToolboxSvg from "../../icons/toolbox.svg"

export default function Experience() {
  
  const {experienceData, setExperienceData} = React.useContext(ExperienceDataContext);
  const [addExperience, setAddExperience] = React.useState(true);
  const [newExperienceData, setNewExperienceData] = React.useState(false);
  const [experienceAdded, setExperienceAdded] = React.useState(true);
  const [showExperienceBtn, setShowExperienceBtn] = React.useState(true);
  const [selectedExperience, setSelectedExperience] = React.useState(false);
  const [notModifiedExperienceData, setNotModifiedExperienceData] = React.useState([]);

  function handleChange (event) {
    const { name, value } = event.target;
  
    if (experienceData.length > 0) {
      const updatedExperienceData = [...experienceData];
      const lastIndex = experienceData.length - 1;

      updatedExperienceData[lastIndex] = {
        ...updatedExperienceData[lastIndex],
        [name]: value
      };
      setExperienceData(updatedExperienceData);
    }
  }

  function experienceObj() {
    experienceData.push({
      experienceId: uuidv4(),
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      saved: false
    })
  }

  function handleAddExperienceBtn() {
    setAddExperience(!addExperience)
    setNewExperienceData(!newExperienceData)
    setExperienceAdded(false);
    experienceObj();
    setShowExperienceBtn(false)
  }

  function showExperienceEdit(experienceId) {
    setNotModifiedExperienceData(experienceData)
    setSelectedExperience(experienceId);
    setShowExperienceBtn(false)
    setAddExperience(false)
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    const experienceId = selectedExperience;
  
    const updatedExperienceData = experienceData.map(experience => {
      if (experience.experienceId === experienceId) {
        return {
          ...experience,
          [name]: value
        };
      }
      return experience;
    });
  
    setExperienceData(updatedExperienceData);
  }  

  function handleEditSave() {
    setSelectedExperience(false);
    setShowExperienceBtn(true);
    setAddExperience(true);
  }

  function handleEditCancel() {
    setAddExperience(true);
    setExperienceAdded(true);
    setNewExperienceData(false);
    setShowExperienceBtn(true);
    setSelectedExperience(false)
    setExperienceData(notModifiedExperienceData);
  }

  function handleDeleteEdit() {
    const experienceId = selectedExperience;
    let updatedExperienceData = [];

    experienceData.map(experience => {
      if(experience.experienceId !== experienceId) {
        updatedExperienceData.push(experience)
      }
    });

    setExperienceData(updatedExperienceData);
    setSelectedExperience(false);
    setShowExperienceBtn(true);
    setAddExperience(true);
  }

  function handleCancel() {
    setExperienceData(prevExperienceData => {
      const updatedExperienceData = prevExperienceData.filter(prevExp => prevExp.saved === true);
      return updatedExperienceData;
    });
    setAddExperience(true);
    setExperienceAdded(true);
    setNewExperienceData(false);
    setShowExperienceBtn(true);
  }
  
  function handleSave() {
    setExperienceData(prevExperienceData => {
      const lastIndex = prevExperienceData.length - 1;
      const updatedExperienceData = [...prevExperienceData];
      updatedExperienceData[lastIndex] = {
        ...updatedExperienceData[lastIndex],
        saved: true
      };
      return updatedExperienceData;
    });
    setNewExperienceData(!newExperienceData);
    setAddExperience(!addExperience)
    setExperienceAdded(!experienceAdded);
    setShowExperienceBtn(true)
  }

  console.log(experienceData)

  return (
    <>
      <div className="experience-input-container">
        <h2 className="preview-personal-info" ><img src={ToolboxSvg} className="preview-personal-svg"/>Experience</h2>
        {experienceData.map(experience => (
          <div key={experience.experienceId}>
            {showExperienceBtn && <button className="data-added-btn" onClick={() => showExperienceEdit(experience.experienceId)} key={experience.experienceId}>{experience.companyName}</button>}
            {selectedExperience === experience.experienceId &&
              <ExperienceTemplate 
                experienceData={experience}
                handleDelete={handleDeleteEdit}
                handleCancel={handleEditCancel}
                handleSave={handleEditSave}
                handleChange={handleEdit}
            />}
          </div>
        ))}
        {addExperience && <button onClick={handleAddExperienceBtn} className="add-btn">+ Experience</button>}
        {newExperienceData && 
          <ExperienceTemplate 
            experienceData={experienceData}
            handleDelete={handleCancel}
            handleCancel={handleCancel}
            handleSave={handleSave}
            handleChange={handleChange}
            index={experienceData.length - 1}
          /> 
        }
      </div>
    </>
  )
}
