import React, { useState } from "react";
function TagFilterButton(props) {
  const { tagValue, tagFilters, setTagFilters } = props;
  const [isActive, setActive] = useState(false);
  const buttonPush = () => {
    if (isActive) {
      setTagFilters(tagFilters.filter(tag => tag !== tagValue));
      setActive(false);
    }
    else {
      setTagFilters([...tagFilters, tagValue])
      setActive(true);
    }      
  }

  const inactiveClass = `
    rounded-md px-4 py-2 mx-1 border
    bg-card-bg bg-opacity-40 
    hover:scale-105 hover:bg-black hover:bg-opacity-80
  `;
  const activeClass = `
    rounded-md px-4 py-2 mx-1 border 
    bg-black bg-opacity-80
    hover:scale-105
  `;

  return (
    <div>
      <button className={isActive ? activeClass : inactiveClass} onClick={buttonPush}>
        {tagValue}
      </button>
    </div>
  )
}

export default TagFilterButton;