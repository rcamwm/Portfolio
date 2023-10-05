function TechnologyLister(props) {
  const {title, mainStyling, technologies} = props;
  return (
    <div className={mainStyling}>
      {title}
      <div className="flex flex-wrap text-xs rounded-sm">
        {technologies.map((tech, index) => {
          return <div key={index} className={`
            text-job-text rounded-md px-4 py-2 m-1 border bg-black bg-opacity-20
          `}>{tech}</div>
        })}
      </div>
    </div>
  )
}

export default TechnologyLister;