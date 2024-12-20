import React, { useState } from 'react';
import '../Style/FamilyDetails.css'
const  FamilyDetails =()=> {
  const [familyDetails, setFamilyDetails] = useState([
    { name: '', relation: '', age: '', occupation: '' },
  ]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFamilyDetails = [...familyDetails];
    newFamilyDetails[index][name] = value;
    setFamilyDetails(newFamilyDetails);
  };

  const handleAddMore = () => {
    setFamilyDetails([
      ...familyDetails,
      { name: '', relation: '', age: '', occupation: '' },
    ]);
  };

  const handleRemove = (index) => {
    const newFamilyDetails = familyDetails.filter((_, i) => i !== index);
    setFamilyDetails(newFamilyDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Family Details:', familyDetails);
  };

  return (
<div className="form-container">
  <h2 className="form-title">Dynamic Family Details</h2>
  <form onSubmit={handleSubmit}>
    {familyDetails.map((member, index) => (
      <div key={index} className="family-entry">
        <h3 className="entry-title">Member {index + 1}</h3>
        <div className="form-group">
          <label htmlFor={`name-${index}`} className="form-label">Name:</label>
          <input
            type="text"
            id={`name-${index}`}
            name="name"
            value={member.name}
            onChange={(event) => handleChange(index, event)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`relation-${index}`} className="form-label">Relation:</label>
          <input
            type="text"
            id={`relation-${index}`}
            name="relation"
            value={member.relation}
            onChange={(event) => handleChange(index, event)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`age-${index}`} className="form-label">Age:</label>
          <input
            type="number"
            id={`age-${index}`}
            name="age"
            value={member.age}
            onChange={(event) => handleChange(index, event)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`occupation-${index}`} className="form-label">Occupation:</label>
          <input
            type="text"
            id={`occupation-${index}`}
            name="occupation"
            value={member.occupation}
            onChange={(event) => handleChange(index, event)}
            className="form-input"
          />
        </div>
        {familyDetails.length > 1 && (
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="remove-button"
          >
            Remove Member
          </button>
        )}
        <hr className="divider" />
      </div>
    ))}
    <button type="button" onClick={handleAddMore} className="add-more-button">
      Add More Member
    </button>
    <button type="submit" className="submit-button">
      Submit
    </button>
  </form>
</div>

  );
}

export default FamilyDetails;
