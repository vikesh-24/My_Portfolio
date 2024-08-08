import React from 'react';
import './SkillCard.css';

export default function SkillCard() {
  return (
    <div className='skill_flex'>
        
        <div className="social_btn2" data-aos="zoom-in">
            <h2 className='social_btn3'>Programming Languages</h2>
            <p>Python, Java, C++, JavaScript, SQL, PHP, C</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Data Science & Machine Learning</h2>
            <p> Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision</p>
        </div>

        <div className="social_btn2" data-aos="zoom-in">
            <h2>Web Technologies</h2>
            <p>HTML, CSS, XML, JavaScript, React, Node.js</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Database Management</h2>
            <p>MySQL, SQL Server, MongoDB</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Cloud Platforms</h2>
            <p>AWS, Google Cloud Platform (GCP)</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Version Control</h2>
            <p>Git, GitHub</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Office Suites</h2>
            <p>Microsoft Office, Google Workspace</p>
        </div>
        <div className="social_btn2" data-aos="zoom-in">
            <h2>Skills</h2>
            <p>Project Management, Teamwork, Time Management, Leadership, Effective Communication, Critical Thinking</p>
        </div>
        
    </div>
  )
}
