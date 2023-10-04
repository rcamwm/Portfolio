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
    rounded-md px-4 py-2 mx-0.5 border
    bg-violet-400 bg-opacity-70 text-white
    md:hover:bg-black md:hover:bg-opacity-80 md:hover:scale-105 md:hover:text-white md:mx-1
    lg:hover:bg-black lg:hover:bg-opacity-80 lg:hover:scale-105 lg:hover:text-white lg:mx-1
    xl:hover:bg-black xl:hover:bg-opacity-80 xl:hover:scale-105 xl:hover:text-white xl:mx-1
    2xl:hover:bg-black 2xl:hover:bg-opacity-80 2xl:hover:scale-105 2xl:hover:text-white 2xl:mx-1
  `;
  const activeClass = `
    rounded-md px-4 py-2 mx-0.5 border text-white
    bg-black bg-opacity-60
    md:hover:scale-105 md:mx-1
    lg:hover:scale-105 lg:mx-1
    xl:hover:scale-105 xl:mx-1
    2xl:hover:scale-105 2xl:mx-1
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