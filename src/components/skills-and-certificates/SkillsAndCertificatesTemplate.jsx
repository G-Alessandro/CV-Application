import DeleteSvg from "../../icons/delete.svg"

export default function SkillsAndCertificatesTemplate(props) {

  function noIndex(key) {
    return props.index === true? props.skillsAndCertificatesData[props.index][key] : props.skillsAndCertificatesData[key]
  }

  return (
    <div className="skill-certificate">
      <label htmlFor="skill-certificate">Skill/Certificate</label>
      <input 
        type="text" 
        id="skill-certificate"
        value={noIndex("skillCertificate")}
        name="skillCertificate"
        onChange={props.handleChange}
        placeholder="Enter skill / certificate"
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