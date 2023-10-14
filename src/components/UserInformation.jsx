import React from "react"
import avatar from "../images/buffalo.png"

export default function UserInformation() {

  const [personalData, setPersonalData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedPersonalData = {
      ...personalData, [name]: value,
      }
    setPersonalData(updatedPersonalData);
  };
  console.log()
  return (
    <>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          id="first-name"
          value={personalData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          id="last-name"
          value={personalData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={personalData.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          value={personalData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={personalData.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      <div className="preview-personal-details">
        <img src={avatar} style={{width: "100px"}}/>
          <h1>{personalData.firstName} {personalData.lastName}</h1>
          <ul>
            <li>{personalData.firstName}</li>
            <li>{personalData.lastName}</li>
            <li>{personalData.email}</li>
            <li>{personalData.phoneNumber}</li>
            <li>{personalData.address}</li>
          </ul>
      </div>
    </>
  )
}
