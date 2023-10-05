import TechnologyLister from "../HelperComponents/TechnologyLister";

function About(props) {
  const { jumpTo } = props;
  const techTitleStyling = "mt-4 py-2 text-white text-left text-sm font-jetbrains flex flex-col";

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
        >About Me</div>

        <div
          className={`
            text-left text-body-text font-roboto
            flex flex-wrap
            text-sm p-6
            md:text-sm md:p-8
            lg:text-md lg:p-12
            xl:text-lg xl:py-12 xl:px-36
            2xl:text-xl 2xl:py-16 2xl:px-44
          `}
        >
          <p>
            Hi, I'm Robert_Cameron! 
            That's a single first name with a space and no hyphen, but you can just call me Cameron. 
            I recently graduated from Cal Poly San Luis Obispo with a bachelor's in computer science, 
            and I'll soon be starting a new role as a software engineer in Baltimore, Maryland. 
          </p>

          <p>
            <br/>
            I never expected to love this field as much as I do. 
            What started as an independent project at an old unrelated job turned into me apprehensively taking an introductory Python course.
            Learning Python was somehow the first time school had ever been enjoyable.
            I ended up taking as many computer science classes as I could, 
            going overboard on every assignment just for the fun of it, trying to write the best programs possible.
          </p>

          <p>
            <br/>
            During both my academic and professional careers, I've gained experience in both data science and fullstack web development.
            You can check out my <button 
                className="text-violet-300 text-opacity-70" 
                onClick={() => jumpTo('Projects')}
              >projects</button> for more detail. Technologies I've programmed in include:
              <div className="">
                <TechnologyLister title="Languages" technologies={["Python", "JavaScript", "TypeScript", "C/C++", "C#", "Java", "Groovy"]} mainStyling={techTitleStyling}/>
                <TechnologyLister title="Data Science and Machine Learning" technologies={["PyTorch", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} mainStyling={techTitleStyling}/>
                <TechnologyLister title="Web Development" technologies={["Node.js", "React.js", "Vue.js", "Express.js", "Socket.io", "Micronaut", "HTML", "CSS", "Tailwind CSS"]} mainStyling={techTitleStyling}/>
                <TechnologyLister title="Databases" technologies={["MySQL", "MongoDB", "Elasticsearch"]} mainStyling={techTitleStyling}/>
                <TechnologyLister title="Deployment Tools" technologies={["Docker", "Heroku", "Github Actions"]} mainStyling={techTitleStyling}/>
                <TechnologyLister title="Security" technologies={["Nginx", "OAuth 2.0", "JSON Web Tokens"]} mainStyling={techTitleStyling}/>
              </div>
          </p>

          <p>
            <br/>
            When I'm not working on projects you can find me cooking <a 
              href="/Food" 
              className="text-violet-300 text-opacity-70" 
              target="_blank" 
              rel="noreferrer"
            >plant-based recipes</a>, doodling <a 
              href="/Art"
              className="text-violet-300 text-opacity-70" 
              target="_blank" 
              rel="noreferrer"
            >weird pictures</a>, and listening to <a 
              href="/Music" 
              className="text-violet-300 text-opacity-70" 
              target="_blank" 
              rel="noreferrer"
            >loud music</a>. Don't hesitate to <button 
            className="text-violet-300 text-opacity-70" 
            onClick={() => jumpTo('Contact')}
          >reach out</button> if you'd like to connect!
          </p>
        </div>

        
      </div>
    </div>
  )
}

export default About;