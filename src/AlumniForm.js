import React, { useState } from 'react';
import axios from 'axios';
import './AlumniForm.css'; // Import CSS file for styling
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function AlumniForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    yearOfPassing: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/alumni/register', formData);
      console.log('Alumni registration successful:', response.data);
      toast.success('Registered Successfully!', {
        position: toast.POSITION.TOP_RIGHT, // Set the toast position
      });
    } catch (error) {
      console.error('Error registering alumni:', error);
      // Handle error notification or state update
    }
  };

  return (
    <div className="alumni-form-container">
      <div className="alumni-form-card">
        <h2>Alumni Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="yearOfPassing">Year of Passing:</label>
            <input
              type="text"
              id="yearOfPassing"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <div>
        <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default AlumniForm;