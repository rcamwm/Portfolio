function Icon(props) {
  const {color, iconPath, sizeClass} = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={sizeClass}
      viewBox={`0 0 24 24`}
    >
      <path 
        fill={color}
        d={iconPath}
      />
    </svg>
  );
}

export default Icon;