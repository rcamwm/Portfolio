import Carousel from "../HelperComponents/Carousel";
import ProjectCard from "../HelperComponents/ProjectCard";

function Projects(props) {
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

        <Carousel items={[
          <ProjectCard/>, 
          <ProjectCard/>, 
          <ProjectCard/>,
          <ProjectCard/>, 
          <ProjectCard/>, 
          <ProjectCard/>, 
        ]} itemsPerPage={1}/>

      </div>
    </div>
  )
}
  
  export default Projects;