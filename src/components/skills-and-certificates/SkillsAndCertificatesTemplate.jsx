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