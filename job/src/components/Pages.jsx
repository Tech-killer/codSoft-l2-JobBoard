import React from 'react';
import './Pages.css';
import { Link } from 'react-router-dom';
import './Pages.css';

const jobData = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'DEF Inc',
    location: 'San Francisco, CA',
    salary: '$70,000 - $90,000',
    description: 'We are looking for a skilled Frontend Developer with a passion for building user-friendly interfaces and experience with React.js.'
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'ABC Corp',
    location: 'New York, NY',
    salary: '$80,000 - $100,000',
    description: 'Join our team as a Backend Developer to create scalable and efficient server-side solutions.'
  },
];

const Pages = () => {

  return (
    <div className="job-detail-container">
      <h1 className="job-title">All Jobs</h1>
      {jobData.map(job => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>{job.description}</p>
          <Link to={`/jobs/${job.id}`} className="details-link">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Pages;
