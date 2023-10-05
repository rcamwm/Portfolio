// import TechnologyLister from "../HelperComponents/TechnologyLister";

function About(props) {
  const { jumpTo } = props;

  // const technologies = ["Nullam", "Lectus ac nisi", "Sagittis vulputate"];

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
            and I'll soon be starting in a new role as a software engineer in Baltimore, Maryland. 
          </p>

          <p>
            <br/>
            In 2018, while at an unrelated job, 
            I uncovered my passion for data and software by identifying discrepancies in employee performance and data records. 
            By introducing an efficient metric system, leading time trials, and developing trend-spotting tools, 
            I addressed employee underperformance and process inefficiencies. 
            This experience drove me to return to school, 
            eager to pursue a career focused on solving data-related challenges.
          </p>

          <p>
            <br/>
            In my free time you can find me cooking <a 
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
            >loud music</a>.
          </p>

          <p>
            <br/>
            Don't forget to check out my <button 
              className="text-violet-300 text-opacity-70" 
              onClick={() => jumpTo('Projects')}
            >projects</button> below, and don't hesitate to <button 
              className="text-violet-300 text-opacity-70" 
              onClick={() => jumpTo('Contact')}
            >reach out</button> if you'd like to connect!</p>
        </div>

        {/* <TechnologyLister technologies={technologies} styling={`
          text-left text-body-text font-roboto max-w-screen-lg
          text-sm pl-10 -mt-4
          md:text-md md:pl-12 md:-mt-4
          lg:text-lg lg:pl-16 lg:-mt-8
          xl:text-xl xl:pl-40 xl:-mt-12
          2xl:text-2xl 2xl:pl-48 2xl:-mt-16
        `}/> */}
      </div>
    </div>
  )
}

export default About;