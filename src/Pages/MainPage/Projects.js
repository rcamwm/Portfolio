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
            description="A still in development deep-learning neural network that generates in-between images given two key frames. Employing curriculum learning with a siamese U-net architecturea and a custom training dataset created in Unity. Leveraging cloud based GPUs for more efficient training."
            technologies={["Python", "PyTorch", "OpenCV", "Jupyter Notebook", "Google Colab", "C#", "Unity Engine"]} 
            githubLink=""
            liveLink=""
            reportLink="/ANNimator"
            techFilters={techFilters}
          />
          <ProjectCard 
            title="Ethereum Price Prediction Model" 
            description="I trained a polynomial regression model to forecast future NASDAQ and S&P500 prices given historic data. I then trained a stacked linear regression / k-nearest neighbors model to predict Ethereum's value given those forecasted stock prices."
            technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} 
            githubLink=""
            liveLink="https://colab.research.google.com/drive/1ZrAy71aptI1kfU9V41mpVqy2gAOtU-dJ?usp=sharing"
            reportLink=""
            techFilters={techFilters}
          />
          <ProjectCard 
            title="Pixlerr.io" 
            description="An online collaborative pixel art canvas. I designed the reactive components in the frontend and built the backend server that stores the current state of the canvas and communicates to all clients through WebSocket connections."
            technologies={["JavaScript", "Node.js", "React.js", "Express.js", "Socket.io", "MongoDB", "HTML", "CSS", "Git", "Heroku"]} 
            githubLink="https://github.com/CSC307-Group"
            liveLink="https://pixlerr-io.herokuapp.com/" 
            reportLink=""
            techFilters={techFilters}
          /> 
          <ProjectCard 
            title="Personal Portfolio Website" 
            description="This very website! Designed and coded from scratch."
            technologies={["JavaScript", "React.js", "Tailwind CSS", "HTML", "Heroku", "Figma"]} 
            githubLink="https://github.com/rcamwm/Portfolio"
            liveLink="/"
            reportLink=""
            techFilters={techFilters}
          />
          
        </div>
      </div>
    </div>
  )
}
  
  export default Projects;