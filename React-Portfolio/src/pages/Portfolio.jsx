import { useState } from 'react';
import Project from '../components/Project';
import '../assets/css/portfolio.css';

export default function Portfolio() {
  const [projects] = useState([
    {
      title: 'earworm',
      name: 'Earworm',
      text: 'Project Earworm was a collaborative effort to bring foreign music to new markets and export our favorites and classics to a whole new audience. With Earworm, you are able to translate the lyrics of your favorite songs into your mother tongue and enjoy the artists and their expressions in a whole new way. If you discover a fun upbeat melody or a stirring dirge in from another culture, Earworm will help you appreciate that culture on a whole new level!',
      repo: 'https://github.com/DariaPressley/project-earworm'
    },
    {
      title: 'wineWizard',
      name: 'Wine Wizard',
      text: 'Wine Wizard is a fun application to help the everyday person navigate the subtleties of pairing a particular wine with foods that will enhance their wines flavor profiles. This app will make suggestions based on the type of food you will be enjoying for the evening, or conversely, it can make an informed suggestion for a meal to compliment your favorite bottle of wine. If you ever worried about which bottle of wine to get, or what kind of wine goes with a specific dish being served, worry no more! Wine Wizard will help you make the perfect choice everytime!',
      repo: 'https://github.com/ramitaarora/wine-wizard'
    },
    {
      title: 'knowledgeQuiz',
      name: 'Knowledge Quiz',
      text: 'This Knowledge Quiz is a great example of the type of coding we learned in the UCLA Full Stack Bootcamp. It taught us how to use our newly-gained knowledge in those first beginning weeks of class to make a functioning webpage which could transition from one element to the next. We learned how to effectively and efficiently code in HTML and CSS as well as utilizing basic JavaScript functions to build a fun game to help us study the material for class.',
      repo: 'https://github.com/jhuber1155/Knowledge-Quiz/tree/main'
    },
    {
      title: 'eCommerce',
      name: 'E-Commerce',
      text: 'This was an example of what we would be seeing from the server side of a fictitious E-Commerce platform. This is a great example of how we could code the back-end of a webpage using Object-Relational Mapping. We used tools like Express.js for our API calls and manipulated data in a MySQL database with Sequelize to reflect the data that a consumer product platform would encounter in their day-to-day business.',
      repo: 'https://github.com/jhuber1155/E-Commerce'
    },
    {
      title: 'securePassword',
      name: 'Secure Password',
      text: 'One of the projects we were able to create was a Secure Password Generator. With security always being a high priority in the field of technology, not only is it important to implement security measures, but also understand how they function behind the scenes as well. With this application, we were able to dynamically update our HTML and CSS powered by the JavaScript code to create a responsive, clean, and polished interface that would randomly generate a strong and secure password for the everyday end user. With the simple click of a button, users could generate a strong password based on their preferences in the type of characters they preferred along with a suitable length of characters to make it secure.',
      repo: 'https://github.com/jhuber1155/Secure-Password-Generator'
    },
    {
      title: 'socialMediaApi',
      name: 'Social Media API',
      text: 'This project allowed us to learn how to effectively use another server-side technology which we may encounter in our day-to-day job. We utilized MongoDB and its corresponding software Mongoose, along with Express.js to build an API for a mock social networking/media website. In this project, we created and tested users creating friend groups, sharing their thoughts, and sharing their reactions with friends as they updated each other on their day. With Social Media and networking being such a large component of peoples interactions with each other, learning how the process works and what is needed to create a successful website will be invaluable.',
      repo: 'https://github.com/jhuber1155/Social-Media-API'
    },
  ]);

  return (
    <div className="container pt-4" style={{ marginTop: '100px'}}>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row p-2 projects-container">
            {projects.map((project, index) => (
              <Project
                project={project}
                key={index}
                className="project-text"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}