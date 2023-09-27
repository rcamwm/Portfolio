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
    goToPage(currentPage - 1);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-screen-xl mx-auto relative">
      <div className="flex overflow-hidden">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="w-1/3 px-2 transform duration-300 hover:scale-105"
          >
            {/* Your item content */}
            <div className="bg-gray-200 p-4 rounded shadow-md">{item}</div>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          className="mr-2 p-2 bg-gray-200 rounded-full focus:outline-none"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          className="p-2 bg-gray-200 rounded-full focus:outline-none"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
