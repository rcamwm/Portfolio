import React, { useEffect }  from "react";

function Art() {
  useEffect(() => {
    document.title = 'art?';
    return () => {
      document.title = "Robert Cameron McGiffert";
    };
  }, []);

  return (
    <div className="relative h-auto">
      <div className={`
        w-auto min-h-screen flex flex-col 
        bg-black bg-opacity-80
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
        >UNDER CONSTRUCTION</div>

        
      </div>
    </div>
  )
}

export default Art;