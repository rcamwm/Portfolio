import React, { useState } from 'react';

function Carousel(props) {
  const { items, itemsPerPage } = props;

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const prevPage = () => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    goToPage(newPage);
  };

  const nextPage = () => {
    const newPage = (currentPage + 1) % totalPages;
    goToPage(newPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = items.slice(startIndex, endIndex);

  const itemWidth = `w-${Math.floor(12 / itemsPerPage)}/12`; // Divide 12 columns by items per page

  return (
    <div className="w-full max-w-screen-xl mx-auto relative">
      <div className="flex overflow-hidden justify-center">
        {visibleItems.map((ItemComponent, index) => (
          <div key={index} className={`px-2 ${itemWidth}`}>
            {ItemComponent}
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          className="ml-2 p-2 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300"
          onClick={prevPage}
        >
          Prev
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          className="p-2 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="absolute left-0 right-0 mx-auto bottom-0 mb-4">
        <div className="flex space-x-2 justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentPage
                  ? 'bg-card-bg' // Active page indicator color
                  : 'bg-white hover:bg-card-bg' // Inactive page indicator color
              }`}
              onClick={() => goToPage(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );


};

export default Carousel;
