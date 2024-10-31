import React, { useState } from 'react';
import './Post.css';

const JobApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.resume) {
      setSubmitStatus('Please fill out all fields and upload your resume.');
      return;
    }
    
    // Prepare the submitted data to display
    const submissionDetails = {
      fullName: formData.fullName,
      email: formData.email,
      resume: formData.resume.name, // Show only the name of the uploaded file
    };

    // Update state to show submitted data
    setSubmittedData(submissionDetails);
    setSubmitStatus('Application submitted successfully!');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      resume: null,
    });
  };

  return (
    <div className="application-container">
      <h2>Apply for the Job</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="form-input"
          onChange={handleFileChange}
          required
        />
        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Application Details:</h3>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Resume:</strong> {submittedData.resume}</p>
        </div>
      )}
    </div>
  );
};

export default JobApplication;
