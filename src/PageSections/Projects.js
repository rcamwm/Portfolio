import Carousel from "../HelperComponents/Carousel";
import ProjectCard from "../HelperComponents/ProjectCard";

function Projects(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };  
  
  const {lrPadding} = props;

  return (
    <div className={`${lrPadding + " h-auto"}`}>
      <div className={`
        w-auto rounded-lg flex flex-col 
        border border-transparent bg-black bg-opacity-60 break-after-page
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

        <Carousel items={[<ProjectCard/>, 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']} itemsPerPage={3}/>
        {/* <div className={`flex flex-wrap justify-center`}>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div> */}

      </div>
    </div>
  )
}
  
  export default Projects;