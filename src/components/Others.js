import React, { useState } from 'react';
import '../Style/Others.css'
const Others =()=> {
  const [entries, setEntries] = useState([
    { name: '', description: '', file: null },
  ]);

  const handleChange = (index, event) => {
    const { name, value, files } = event.target;
    const newEntries = [...entries];
    if (name === 'file') {
      newEntries[index][name] = files[0]; // Store the uploaded file
    } else {
      newEntries[index][name] = value;
    }
    setEntries(newEntries);
  };

  const handleAddMore = () => {
    setEntries([...entries, { name: '', description: '', file: null }]);
  };

  const handleRemove = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Entries:', entries);

    // For file uploads, you'll typically need to use FormData and submit to an API
    const formData = new FormData();
    entries.forEach((entry, index) => {
      formData.append(`entry[${index}][name]`, entry.name);
      formData.append(`entry[${index}][description]`, entry.description);
      if (entry.file) {
        formData.append(`entry[${index}][file]`, entry.file);
      }
    });

    // Example: Submit the form data to an API
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
  };

  return (
    <div className="form-container">
    <h2 className="form-title">Dynamic Form with File Upload</h2>
    <form onSubmit={handleSubmit}>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <h3 className="entry-title">Entry {index + 1}</h3>
          <div className="form-group">
            <label htmlFor={`name-${index}`} className="form-label">Name:</label>
            <input
              type="text"
              id={`name-${index}`}
              name="name"
              value={entry.name}
              onChange={(event) => handleChange(index, event)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`description-${index}`} className="form-label">Description:</label>
            <input
              type="text"
              id={`description-${index}`}
              name="description"
              value={entry.description}
              onChange={(event) => handleChange(index, event)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`file-${index}`} className="form-label">Upload File:</label>
            <input
              type="file"
              id={`file-${index}`}
              name="file"
              onChange={(event) => handleChange(index, event)}
              className="file-input"
            />
            {entry.file && <p className="file-info">Uploaded: {entry.file.name}</p>}
          </div>
          {entries.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="remove-button"
            >
              Remove Entry
            </button>
          )}
          <hr className="divider" />
        </div>
      ))}
      <button type="button" onClick={handleAddMore} className="add-more-button">
        Add More Entry
      </button>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  </div>
  
  );
}

export default Others;
