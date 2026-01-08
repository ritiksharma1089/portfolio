'use client';

import React from 'react';
import Card from './Card'; 

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, Bootstrap, and Framer Motion.',
    image: '/portfolio.png',
    githubLink: 'https://github.com/ritiksharma1089/portfolio',
    source:" https://portfolio-b29b.vercel.app/"
  },
  {
    title: 'Second hand car selling web',
    description: 'A next-js web for selling old cars.',
    image: '/mycar.png',
    source:"https://mycars-dwqb.vercel.app/",
    githubLink: 'https://github.com/ritiksharma1089/Mycars'
  },
  {
    title: 'Rodi-Dust selling web',
    description: 'A React-based weather app using  for selling construction products.',
    image: '/raghavbuilder.png',
    githubLink: 'https://github.com/ritiksharma1089/raghavbuilder',
    source:"https://raghavbuilder.vercel.app/"
  }
  
];

const ProjectsSection = () => {
  return (
    <section className="bg-black text-light py-5 px-3" id="projects">
  <div className="container">
   <h2 className="text-center text-primary mb-5">My Projects</h2>
     <div className="row g-4 justify-content-center">
       {projects.map((project, index) => (
  <div className="col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
      <Card
         title={project.title}
  description={project.description}
          image={project.image}
                githubLink={project.githubLink}
                source={project.source}
       />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
