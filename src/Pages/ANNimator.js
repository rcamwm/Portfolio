import React, { useEffect }  from "react";

function ANNimator() {
  useEffect(() => {
    document.title = 'ANNimator Report';
    return () => {
      document.title = "Robert Cameron McGiffert";
    };
  }, []);

  return (
    <div className="relative h-auto">
      <div className={`
        w-auto min-h-screen flex flex-col 
        bg-black bg-opacity-80
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
        >
          UNDER CONSTRUCTION
          <div className="m-4 flex flex-wrap justify-center">
            <a 
              className="w-3/4 h-3/4"
              href="project_resources/ANNimator/Diagram.pdf"
              target="_blank"
              rel="noreferrer" 
            >
              <img
                src="project_resources/ANNimator/Diagram.png"
                alt="Architecture Diagram"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ANNimator;

/**
 * Introduction
 * 
 * In recent years, animation has seen a surge of creativity with styles that blend traditional 2D techniques with 3D graphics and that have set new standards for the industry. Yet, for numerous major studios, the choice between 2D and 3D often hinges on expediency rather than artistic vision, favoring the swifter production capabilities of 3D.
 * ANNimator is an ongoing project that aims to change this by streamlining 2D animation tasks while preserving the essential role of animators. This tool is designed to assist animators in automating straightforward in-between frame transitions, allowing them to allocate more time and creativity to complex scenes.
 * I took on this project for two reasons. Firstly, to gain experience in deep learning and artificial neural networks, using libraries like PyTorch. And secondly, to enhance the accessibility of 2D animation, so that ideally, the choice between 2D and 3D comes down to artistic vision over speed of production.
 * As a lifelong artist, I recognize the controversy surrounding AI's role in art. I want to clarify that I don't support replacing artists with machines. I personally created all training data without resorting to internet scraping or using others' work. Additionally, ANNimator doesn't generate complete scenes; it focuses solely on producing in-between frames.
 */

/**
 * Project Overview
 * 
 * Currently, ANNimator is in its proof-of-concept stage, with the model still undergoing training. The primary goal is to enable the model to take two key images from a scene as input and produce a logical in-between image. Once the training is complete, the plan is to create a web application that leverages this model to generate seamless animations from user-submitted images.
 * One significant challenge I'm encountering is limited computing resources and the lengthy training time of the model. The project is currently running on a Google Colab notebook, utilizing their (limited) cloud-based GPU services. To optimize resources and save time, the model is trained with smaller images measuring 128x98 pixels. If this version is successful, I intend to make iterations to work with higher-resolution images.
 */