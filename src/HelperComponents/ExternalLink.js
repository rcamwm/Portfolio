import Icon from "./Icon";

function ExternalLink(props) {
  const {iconPath, name, link} = props;
  const color = "#dfdfdf"

  return (
    <a 
      href={link}
      target="_blank"
      rel="noreferrer" 
      className={`
        inline-flex text-left text-job-text font-jetbrains border border-violet-300 border-opacity-70 rounded-md
        text-sm p-2 my-1 hover:scale-105
    `}>
      <Icon color={color} iconPath={iconPath} sizeClass="w-4 h-4 mr-1"/>
      {name}
    </a>
  )
}

export default ExternalLink;