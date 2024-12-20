import React, { useState } from 'react';
import '../Style/Eductionstyle.css'
const  EducationDetails =() =>{
  const [educationDetails, setEducationDetails] = useState([
    {
      qualification: '',
      institution: '',
      yearOfPassing: '',
      grade: '',
      specialization: '',
    },
  ]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newEducationDetails = [...educationDetails];
    newEducationDetails[index][name] = value;
    setEducationDetails(newEducationDetails);
  };

  const handleAddMore = () => {
    setEducationDetails([
      ...educationDetails,
      {
        qualification: '',
        institution: '',
        yearOfPassing: '',
        grade: '',
        specialization: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const newEducationDetails = educationDetails.filter((_, i) => i !== index);
    setEducationDetails(newEducationDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Education Details:', educationDetails);
  };

  return (
<div className="form-container">
  <h2 className="form-title">Dynamic Education Details</h2>
  <form onSubmit={handleSubmit}>
    {educationDetails.map((education, index) => (
      <div key={index} className="education-entry">
        <h3 className="entry-title">Entry {index + 1}</h3>
        <div className="form-group">
          <label htmlFor={`qualification-${index}`} className="form-label">Qualification:</label>
          <input
            type="text"
            id={`qualification-${index}`}
            name="qualification"
            value={education.qualification}
            onChange={(event) => handleChange(index, event)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`institution-${index}`} className="form-label">Institution:</label>
          <input
            type="text"
            id={`institution-${index}`}
            name="institution"
            value={education.institution}
            onChange={(event) => handleChange(index, event)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`yearOfPassing-${index}`} className="form-label">Year of Passing:</label>
          <input
            type="number"
            id={`yearOfPassing-${index}`}
            name="yearOfPassing"
            value={education.yearOfPassing}
            onChange={(event) => handleChange(index, event)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`grade-${index}`} className="form-label">Grade/Percentage:</label>
          <input
            type="text"
            id={`grade-${index}`}
            name="grade"
            value={education.grade}
            onChange={(event) => handleChange(index, event)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`specialization-${index}`} className="form-label">Specialization:</label>
          <input
            type="text"
            id={`specialization-${index}`}
            name="specialization"
            value={education.specialization}
            onChange={(event) => handleChange(index, event)}
            className="form-input"
          />
        </div>
        {educationDetails.length > 1 && (
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="remove-button"
          >
            Remove Entry
          </button>
        )}
        <hr className="divider"/>
      </div>
    ))}
    <button type="button" onClick={handleAddMore} className="add-more-button">
      Add More
    </button>
    <button type="submit" className="submit-button">
      Submit
    </button>
  </form>
</div>

  );
}

export default EducationDetails;
