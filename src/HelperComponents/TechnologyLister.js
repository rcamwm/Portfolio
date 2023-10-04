function TechnologyLister(props) {
  const {technologies} = props;
  return (
    <div className="flex flex-wrap rounded-sm text-white text-xs font-jetbrains">
      {technologies.map((tech, index) => {
        return <div key={index} className={`
          text-job-text rounded-md px-4 py-2 m-1 border bg-black bg-opacity-20
        `}>{tech}</div>
      })}
    </div>
  )
}

export default TechnologyLister;