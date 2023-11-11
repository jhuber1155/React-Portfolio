import { useState } from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  const [projects] = useState([
    {
      title: 'earworm',
      text: 'This is the description for Project 1',
      repo: 'https://github.com/DariaPressley/project-earworm'
    },
    {
      title: 'wineWizard',
      text: 'This is the description for Project 2',
      repo: 'https://github.com/ramitaarora/wine-wizard'
    },
    {
      title: 'knowledgeQuiz',
      text: 'This is the description for Project 3',
      repo: 'https://github.com/jhuber1155/Knowledge-Quiz/tree/main'
    },
    {
      title: 'eCommerce',
      text: 'This is the description for Project 2',
      repo: 'https://github.com/jhuber1155/E-Commerce'
    },
    {
      title: 'securePassword',
      text: 'This is the description for Project 2',
      repo: 'https://github.com/jhuber1155/Secure-Password-Generator'
    },
    {
      title: 'socialMediaApi',
      text: 'This is the description for Project 2',
      repo: 'https://github.com/jhuber1155/Social-Media-API'
    },
  ]);

  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row row-cols-1 p-2">
            {projects.map((project, index) => (
              <Project 
              
                project={project}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}