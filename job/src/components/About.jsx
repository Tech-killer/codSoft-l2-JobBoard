import React from 'react';
import './About.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    photo: 'https://imgsrv2.voi.id/F1j7yTGiTBU__pnoXJIYPZnrOczXBbqKJT1bc3vD1bU/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80MTcxNDEvMjAyNDA5MTcxNzM1LW1haW4uY3JvcHBlZF8xNzI2NTY5MzU3LmpwZw.jpg' 
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    photo: 'https://imgsrv2.voi.id/F1j7yTGiTBU__pnoXJIYPZnrOczXBbqKJT1bc3vD1bU/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80MTcxNDEvMjAyNDA5MTcxNzM1LW1haW4uY3JvcHBlZF8xNzI2NTY5MzU3LmpwZw.jpg'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Lead Designer',
    photo: 'https://imgsrv2.voi.id/F1j7yTGiTBU__pnoXJIYPZnrOczXBbqKJT1bc3vD1bU/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy80MTcxNDEvMjAyNDA5MTcxNzM1LW1haW4uY3JvcHBlZF8xNzI2NTY5MzU3LmpwZw.jpg'
  },
];

const DiffContainer = ({ title, children }) => {
    return (
        <div className="diff-container bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
};

const About = () => {
    return (
        <div className="about-us-container p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg mb-4 text-center">
                Welcome to Job Board, where we connect talented individuals with their dream jobs! Our mission is to simplify the job search process for both job seekers and employers.
            </p>
            <p className="text-lg mb-8 text-center">
                With a user-friendly platform, we aim to provide the best opportunities in various fields and ensure a seamless experience for everyone involved.
            </p>

            <DiffContainer title="Our Vision">
                <p className="text-lg mb-8">
                    Our vision is to create a world where finding the right job is easy and accessible for everyone, empowering individuals to build fulfilling careers.
                </p>
            </DiffContainer>

            <DiffContainer title="Meet Our Team">
                <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-member">
                            <img src={member.photo} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </DiffContainer>
        </div>
    );
};

export default About;
