
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
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text" 
        id="degree"
        value={noIndex("degree")}
        name="degree"
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
      <div>
        <button onClick={props.handleDelete} >Delete</button>
        <button onClick={props.handleCancel} >Cancel</button>
        <button onClick={props.handleSave} >Save</button>
      </div>
    </div>
  )
} 