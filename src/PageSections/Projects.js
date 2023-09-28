import ProjectCard from "../HelperComponents/ProjectCard";

function Projects(props) {
  function randStr(length) { // DELETE -> Placeholder
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789                 ';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  }
  

  return (
    <div className="relative h-auto">
      <div className={`
        w-auto flex flex-col 
        border border-transparent bg-black bg-opacity-60
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

        <div className="flex flex-wrap justify-center">
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
          <ProjectCard title={randStr(15)} description={randStr(150)} technologies={["Python", "scikit-learn", "pandas", "NumPy", "Jupyter Notebook", "Google Colab"]} githubLink="" liveLink=""/>
        </div>
      </div>
    </div>
  )
}
  
  export default Projects;