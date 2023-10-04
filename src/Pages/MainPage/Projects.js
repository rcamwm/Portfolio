import React, { useState } from 'react';
import ProjectCard from "../../HelperComponents/ProjectCard";
import TextBox from "../../HelperComponents/TextBox";

function Projects() {  
  const [techFilters, setTechFilters] = useState("");

  return (
    <div className="relative h-auto"> 
      <div className={` 
        w-auto min-h-screen flex flex-col 
        bg-black bg-opacity-60
        p-6
        md:p-6
        lg:p-8
        xl:p-12
        2xl:p-14
      `}>
        <div 
          className={`
            text-center text-white font-sofia-sans tracking-tighter
            text-lg p-4 
            md:text-xl
            lg:text-2xl 
            xl:text-4xl
            2xl:text-6xl
          `}
        >Projects</div>

        <div className='flex justify-center text-sm text-white text-opacity-80 font-roboto mt-8 mb-1'>
          Filter projects by technologies:
        </div>
        <TextBox text={techFilters} setText={setTechFilters} />

        <div className="flex flex-wrap justify-center">
          <ProjectCard 
            title="ANNimator" 
            description="An ongoing project to develop a deep-learning neural network that generates in-between images given two key frames. Employing curriculum learning with a siamese U-net architecture and a custom training dataset created in Unity. Leveraging cloud based GPUs for more efficient training."
            technologies={["Python", "PyTorch", "OpenCV", "Jupyter Notebook", "Google Colab", "C#", "Unity Engine"]} 
            githubLink=""
            liveLink=""
            otherLink="/ANNimator"
            otherTitle="Read More"
            techFilters={techFilters}
          />
          <ProjectCard 
            title="Ethereum Price Prediction Model" 
            description="I trained a polynomial regression model to forecast future NASDAQ and S&P500 prices given historic data. I then trained a stacked linear regression / k-nearest neighbors model to predict Ethereum's value given those forecasted stock prices."
            technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} 
            githubLink=""
            liveLink="https://colab.research.google.com/drive/1ZrAy71aptI1kfU9V41mpVqy2gAOtU-dJ?usp=sharing"
            otherLink=""
            techFilters={techFilters}
          />
          <ProjectCard 
            title="Openprise Dashboard Application" 
            description="As an Openprise intern, I led a team with two other interns in developing an internal dashboard application for visualizing customer data usage trends. I built a server-side backend that applies ETL strategies to transmit data from company databases to the dashboard through REST APIs, and designed the architecture of the frontend for dynamic data visualization."
            technologies={["MySQL", "Elasticsearch", "Groovy", "Micronaut Framework", "TypeScript", "Node.js", "Vue.js", "Docker", "Nginx", "OAuth 2.0", "JWT", "Git"]} 
            githubLink=""
            liveLink="" 
            otherLink="https://www.openprisetech.com/"
            otherTitle="Openprise Website"
            techFilters={techFilters}
          /> 
          <ProjectCard 
            title="Pixlerr.io" 
            description="An online collaborative pixel art canvas. As part of a team of 4, I designed our reactive components in the frontend. I also built the backend server that stores the current state of the canvas and communicates to all clients through WebSocket connections."
            technologies={["JavaScript", "Node.js", "React.js", "Express.js", "Socket.io", "MongoDB", "HTML", "CSS", "Git", "Heroku"]} 
            githubLink="https://github.com/CSC307-Group"
            liveLink="https://pixlerr-io.herokuapp.com/" 
            otherLink=""
            techFilters={techFilters}
          /> 
          <ProjectCard 
            title="Simple Message Passing Interface" 
            description="I refactored a parallel-proces matrix equation solver that had been designed by former students. I did this as part of an independent studies program where the goal was to assist a professor with their research. I fixed major bugs, increased readability and reusability, and wrote extensive test cases."
            technologies={["C/C++", "GNU Debugger", "Makefile", "Unix System Commands", "Xubuntu Virtual Machine"]} 
            githubLink="https://github.com/rcamwm/SIMPI"
            liveLink="" 
            otherLink=""
            techFilters={techFilters}
          /> 
          <ProjectCard 
            title="Reminisce" 
            description="Alpha version of a 2D puzzle sidescroller game that I developed with 2 other teammates. I created all pixel artwork and programmed all animations seen in the game. I led the team in level design, and wrote scripts for events, platform movement, and interactions between the player character, key items, and obstacles."
            technologies={["C#", "Unity Engine", "Itch.io", "Aesprite"]} 
            githubLink="https://github.com/rcamwm/final-project-378"
            liveLink="https://rcamwm.itch.io/reminisce" 
            otherLink=""
            techFilters={techFilters}
          /> 
          <ProjectCard 
            title="Personal Portfolio Website" 
            description="This very website! Designed and coded from scratch. :)"
            technologies={["JavaScript", "React.js", "Tailwind CSS", "HTML", "Heroku", "Figma"]} 
            githubLink="https://github.com/rcamwm/Portfolio"
            liveLink="/"
            otherLink=""
            techFilters={techFilters}
          />
          
        </div>
      </div>
    </div>
  )
}
  
  export default Projects;