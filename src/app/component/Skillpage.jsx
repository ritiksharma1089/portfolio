'use client';

import React from 'react';
import SkillCard from './Skillcard';


const skills = [
  { skill: 'Java', level: 80 },
  { skill: 'Python', level: 70 },
  { skill: 'DBMS', level: 60 },
  { skill: 'HTML / CSS', level: 75 },
  { skill: 'JavaScript', level: 65 },
  { skill: 'React.js', level: 60 },
  { skill: 'Git & GitHub', level: 70 },
  { skill: 'Data structure', level: 85 }
];

const SkillsPage = () => {
  return (
    <section className="bg-black text-light py-5 px-3" id="skills">
      <div className="container">
        <h2 className="text-center text-primary mb-5">My Skills</h2>
        <div className="row g-4">
          {skills.map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <SkillCard skill={item.skill} level={item.level} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
