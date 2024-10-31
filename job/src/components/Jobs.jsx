import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const JobListings = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Tech', location: 'New York, NY', salary: '$80,000 - $100,000' },
    { id: 2, title: 'Product Manager', company: 'XYZ Corp', location: 'Remote', salary: '$90,000 - $120,000' },
    { id: 3, title: 'Frontend Developer', company: 'DEF Inc', location: 'San Francisco, CA', salary: '$70,000 - $90,000' }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-listings-container">
      <h2>Job Listings</h2>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="jobs-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>Salary: {job.salary}</p>
              <Link to={`/jobs/${job.id}`} className="details-link">View Details</Link>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;
