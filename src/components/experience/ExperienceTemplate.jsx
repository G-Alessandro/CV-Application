import DeleteSvg from "../../icons/delete.svg"

export default function ExperienceTemplate(props) {

  function noIndex(key) {
    return props.index === true? props.experienceData[props.index][key] : props.experienceData[key]
  }

  return (
    <div className="experience">
      <label htmlFor="company-name">Company-name</label>
      <input 
        type="text" 
        id="company-name"
        value={noIndex("companyName")}
        name="companyName"
        onChange={props.handleChange}
        placeholder="Enter company name"
      />
      <label htmlFor="position-title">Position Title</label>
      <input 
        type="text" 
        id="position-title"
        value={noIndex("positionTitle")}
        name="positionTitle"
        onChange={props.handleChange}
        placeholder="Enter position title"
      />
      <label htmlFor="start-date">Start Date</label>
      <input 
        type="text" 
        id="start-date"
        value={noIndex("startDate")}
        name="startDate"
        onChange={props.handleChange}
        placeholder="Enter start date"
      />
      <label htmlFor="end-date">End Date</label>
      <input 
        type="text" 
        id="end-date"
        value={noIndex("endDate")}
        name="endDate"
        onChange={props.handleChange}
        placeholder="Enter end date"
      />
      <label htmlFor="location">Location</label>
      <input 
        type="text" 
        id="location"
        value={noIndex("location")}
        name="location"
        onChange={props.handleChange}
        placeholder="Enter location"
      />
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        value={noIndex("description")}
        name="description"
        onChange={props.handleChange}
        placeholder="Enter description"
        rows={5}
      />
      <div className="btn-container">
        <button className="delete-btn" onClick={props.handleDelete}><img className="delete-btn-svg" src={DeleteSvg}/>Delete</button>
        <button className="cancel-btn" onClick={props.handleCancel}>Cancel</button>
        <button className="save-btn" onClick={props.handleSave} >Save</button>
      </div>
    </div>
  )
}

