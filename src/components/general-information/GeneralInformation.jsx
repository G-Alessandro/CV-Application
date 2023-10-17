import React from "react"
import { PersonalDataContext } from "../../App";
import PersonalDataSvg from "../../icons/account-details.svg"

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
      <div className="general-input-container">
        <h2 className="preview-personal-info" ><img src={PersonalDataSvg} className="preview-personal-svg"/>Personal Details</h2>
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          id="first-name"
          value={personalData.firstName}
          name="firstName"
          onChange={handleChange}
          placeholder="Enter first name"
        />
        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          id="last-name"
          value={personalData.lastName}
          name="lastName"
          onChange={handleChange}
          placeholder="Enter last name"
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={personalData.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
        />
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="text"
          id="phone-number"
          value={personalData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          placeholder="Enter phone number"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={personalData.address}
          name="address"
          onChange={handleChange}
          placeholder="Enter city, country"
        />
      </div>
    </>
  )
}
