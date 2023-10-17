import DeleteSvg from "../../icons/delete.svg"

export default function EducationTemplate(props) {

  function noIndex(key) {
    return props.index === true? props.educationData[props.index][key] : props.educationData[key]
  }
  
  return (  
    <div className="education">
      <label htmlFor="school">School</label>
      <input 
        type="text" 
        id="school"
        value={noIndex("school")}
        name="school"
        onChange={props.handleChange}
        placeholder="Enter school / university"
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text" 
        id="degree"
        value={noIndex("degree")}
        name="degree"
        onChange={props.handleChange}
        placeholder="Enter degree / field of study"
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
      <div className="btn-container">
        <button className="delete-btn" onClick={props.handleDelete}><img className="delete-btn-svg" src={DeleteSvg}/>Delete</button>
        <button className="cancel-btn" onClick={props.handleCancel}>Cancel</button>
        <button className="save-btn" onClick={props.handleSave}>Save</button>
      </div>
    </div>
  )
} 