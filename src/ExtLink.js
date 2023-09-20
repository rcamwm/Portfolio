function ExtLink(props) {
  const {iconPath, name, link} = props;
  const color = "#dfdfdf"

  return (
    <a 
      href={link}
      target="_blank"
      rel="noreferrer" 
      className={`
        inline-flex text-left text-job-text font-jetbrains 
        text-sm pl-3 pb-3 mr-2
    `}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-4 h-4 mr-1"
        viewBox={`0 0 24 24`}
      >
        <path 
          fill={color} 
          d={iconPath}
        />
      </svg>
      {name}
    </a>
  )
}

export default ExtLink;