
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
      />
      <label htmlFor="position-title">Position Title</label>
      <input 
        type="text" 
        id="position-title"
        value={noIndex("positionTitle")}
        name="positionTitle"
        onChange={props.handleChange}
      />
      <label htmlFor="start-date">Start Date</label>
      <input 
        type="text" 
        id="start-date"
        value={noIndex("startDate")}
        name="startDate"
        onChange={props.handleChange}
      />
      <label htmlFor="end-date">End Date</label>
      <input 
        type="text" 
        id="end-date"
        value={noIndex("endDate")}
        name="endDate"
        onChange={props.handleChange}
      />
      <label htmlFor="location">Location</label>
      <input 
        type="text" 
        id="location"
        value={noIndex("location")}
        name="location"
        onChange={props.handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        value={noIndex("description")}
        name="description"
        onChange={props.handleChange}
      />
      <div>
        <button onClick={props.handleDelete} >Delete</button>
        <button onClick={props.handleCancel} >Cancel</button>
        <button onClick={props.handleSave} >Save</button>
      </div>
    </div>
  )
}

