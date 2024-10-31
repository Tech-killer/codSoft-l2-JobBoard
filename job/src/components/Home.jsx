import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Tech', location: 'New York, NY', salary: '$80,000 - $100,000' },
    { id: 2, title: 'Product Manager', company: 'XYZ Corp', location: 'Remote', salary: '$90,000 - $120,000' },
    { id: 3, title: 'Frontend Developer', company: 'DEF Inc', location: 'San Francisco, CA', salary: '$70,000 - $90,000' }
  ];

  return (
    <div className="home-container">
      <div className="home-welcome">
        <h1>Welcome to JobFinder!</h1>
        <p>Find your next career opportunity here.</p>
      </div>

      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {featuredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>Salary: {job.salary}</p>
              <Link to={`/jobs/${job.id}`} className="details-link">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
