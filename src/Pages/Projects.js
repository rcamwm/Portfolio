import React, { useState } from 'react';
import ProjectCard from "../HelperComponents/ProjectCard";
import TagFilterButton from '../HelperComponents/TagFilterButton';
import TextBox from "../HelperComponents/TextBox";

function Projects() {  
  const [techFilters, setTechFilters] = useState("");
  const [tagFilters, setTagFilters] = useState([]);

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
          Filter projects:
        </div>
        <TextBox text={techFilters} setText={setTechFilters} />
        <div className={`
          flex justify-center text-sm font-jetbrains
          mt-2 mb-4 
          md:mb-2
          lg:mb-2
          xl:mb-0
          2xl:mb-0
        `}>
          <TagFilterButton tagValue="Data" tagFilters={tagFilters} setTagFilters={setTagFilters}/>
          <TagFilterButton tagValue="Web Apps" tagFilters={tagFilters} setTagFilters={setTagFilters}/>
          <TagFilterButton tagValue="Games" tagFilters={tagFilters} setTagFilters={setTagFilters}/>
          <TagFilterButton tagValue="Misc" tagFilters={tagFilters} setTagFilters={setTagFilters}/>
        </div>

        <div className="flex flex-wrap justify-center">
          <ProjectCard 
            title="ANNimator" 
            subtitle="Artificial Neural Network for Animation In-Between Frame Generation"
            description="I'm currently training a model to automate animation tasks by generating in-between images given two key frames. I'm employing curriculum learning with a siamese U-net architecture and a custom training dataset created in Unity. I'm also leveraging cloud based GPUs for more efficient training."
            technologies={["Python", "PyTorch", "Jupyter Notebook", "Google Colab", "C#", "Unity Engine"]} 
            githubLink=""
            liveLink=""
            driveLink="https://drive.google.com/drive/folders/1Oo0U6E6myY-_wuYsRGEyKpi93JmNZKcu"
            otherLink=""
            otherTitle=""
            tags={["Data"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          />
          <ProjectCard 
            title="Ethereum Predictor" 
            subtitle="Machine Learning Model to Predict ETH Prices"
            description="I trained a polynomial regression model to forecast future NASDAQ and S&P500 prices given their historic trends. I also trained a stacked linear regression / k-nearest neighbors model to predict Ethereum's value given those two stock prices. I then predicted Ethereum's future pricing given the initial forecasted NASDAQ and S&P500 values."
            technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} 
            githubLink=""
            liveLink="https://colab.research.google.com/drive/1ZrAy71aptI1kfU9V41mpVqy2gAOtU-dJ?usp=sharing"
            driveLink=""
            otherLink=""
            tags={["Data"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          />
          <ProjectCard 
            title="Openprise Dashboard Application" 
            subtitle="Customer Data Trend Visualizer"
            description="As an Openprise intern, I led a team with two other interns in developing an internal dashboard application for visualizing customer data usage trends. I built a server-side backend that applies ETL strategies to transmit data from company databases to the dashboard through REST APIs, and designed the architecture of the frontend for dynamic data visualization."
            technologies={["MySQL", "Elasticsearch", "Groovy", "Micronaut", "TypeScript", "Node.js", "Vue.js", "Docker", "Gradle", "Nginx", "OAuth 2.0", "JWT", "Git"]} 
            githubLink=""
            liveLink="" 
            driveLink=""
            otherLink="https://www.openprisetech.com/"
            otherTitle="Openprise Website"
            tags={["Data", "Web Apps"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          /> 
          <ProjectCard 
            title="Pixlerr.io" 
            subtitle="Online Collaborative Pixel Art Canvas"
            description="I built this application with three teammates. My main contributions were designing the reactive components in the frontend for the application's core functionality, and building the backend server that stores the canvas's current state and communicates to all clients through WebSocket connections."
            technologies={["JavaScript", "Node.js", "React.js", "Express.js", "Socket.io", "MongoDB", "HTML", "CSS", "Git", "Heroku"]} 
            githubLink="https://github.com/CSC307-Group"
            liveLink="https://pixlerr-io.herokuapp.com/" 
            driveLink=""
            otherLink=""
            tags={["Web Apps"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          /> 
          <ProjectCard 
            title="Simple Message Passing Interface" 
            subtitle="Parallel-Process Linear Algebra Calculator"
            description="As part of an independent studies program where I helped a professor with his research, I refactored a matrix equation calculator that other students had worked on the year before. The application was completely broken when I started. By the end, I fixed major bugs and restored its functionality. I also wrote extensive test cases to help in future development."
            technologies={["C/C++", "GNU Debugger", "Makefile", "Unix System Commands", "Xubuntu Virtual Machine"]} 
            githubLink="https://github.com/rcamwm/SIMPI"
            liveLink="" 
            driveLink=""
            otherLink=""
            tags={["Misc"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          /> 
          <ProjectCard 
            title="Reminisce" 
            subtitle="2D Puzzle Sidescroller (Alpha Version)"
            description="I developed this game along with two other teammates. I created all pixel artwork and programmed every animation. I led the team in level design, and wrote scripts for events, platform movement, and interactions between the player character, key items, and obstacles."
            technologies={["C#", "Unity Engine", "Itch.io", "Aesprite"]} 
            githubLink="https://github.com/rcamwm/final-project-378"
            liveLink="https://rcamwm.itch.io/reminisce" 
            driveLink=""
            otherLink=""
            tags={["Games"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          /> 
          <ProjectCard 
            title="Personal Portfolio" 
            subtitle="This Very Website"
            description="I designed and coded this site from scratch :)"
            technologies={["JavaScript", "React.js", "Tailwind CSS", "HTML", "Heroku", "Figma"]} 
            githubLink="https://github.com/rcamwm/Portfolio"
            liveLink="/"
            driveLink=""
            otherLink=""
            tags={["Web Apps"]}
            techFilters={techFilters}
            tagFilters={tagFilters}
          />
          
        </div>
      </div>
    </div>
  )
}
  
  export default Projects;