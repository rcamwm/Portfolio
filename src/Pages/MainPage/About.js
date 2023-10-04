// import TechnologyLister from "../HelperComponents/TechnologyLister";

function About() {
  const description = `Hi, I'm Robert_Cameron! That's a single first name with a space and no hyphen, but you can just call me Cameron. I previously worked as a software engineer intern at Openprise from June 2022 to May 2023, and I graduated with a bachelor's in computer science from Cal Poly San Luis Obispo just a month later.  
  <br/>,  
  `;

  // const technologies = ["Nullam", "Lectus ac nisi", "Sagittis vulputate"];

  return (
    <div className="relative">
      <div className={`
        w-auto h-screen flex flex-col 
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
          dangerouslySetInnerHTML={{ __html: `<p>${description.replace(/\n/g, '</p><p>')}</p>`}}
          className={`
            text-left text-body-text font-roboto
            flex flex-wrap
            text-sm p-6
            md:text-md md:p-8
            lg:text-lg lg:p-12
            xl:text-xl xl:py-12 xl:px-36
            2xl:text-2xl 2xl:py-16 2xl:px-44
          `}
        />

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