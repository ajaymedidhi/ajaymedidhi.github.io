import React, {useState} from 'react'
import {FaShoppingCart, FaHandshake, FaHome} from 'react-icons/fa' // Import icons from react-icons

import './index.css'

const PropertyManagement = () => {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleCityChange = e => {
    setSelectedCity(e.target.value)
  }

  const handleOptionChange = option => {
    setSelectedOption(option)
  }

  return (
    <>
      <div className="property-management-services">
        <div className="header">
          <h2 className="pms-heading">Property Management Services</h2>
          <button>Post Property</button>
        </div>
        {/* City Dropdown */}
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Pune">Pune</option>
          <option value="Surat">Surat</option>
        </select>

        <div className="service-container">
          <div className="service">
            <h3>
              <FaShoppingCart /> Buy
            </h3>
            <ul>
              <li>Property Valuation</li>
            </ul>
          </div>
          <div className="service">
            <h3>
              <FaHandshake /> Sell
            </h3>
          </div>
          <div className="service">
            <h3>
              <FaHome /> Rent
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyManagement
