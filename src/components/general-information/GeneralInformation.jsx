import React from "react"
import { PersonalDataContext } from "../../App";

export default function GeneralInformation() {
  
  const { personalData, setPersonalData } = React.useContext(PersonalDataContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedPersonalData = {
      ...personalData, [name]: value,
      }
    setPersonalData(updatedPersonalData);
  };

  return (
    <>
      <div className="personal-details-container">
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
    </>
  )
}
