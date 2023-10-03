import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="mx-20">
      <div className="py-2 flex justify-center">
        <div className="my-4 bg-blue-100 drop-shadow-lg rounded-lg w-fit h-10 flex items-center font-semibold text-lg">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`mx-2 ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-blue-500"
            }`}
            disabled={currentPage === 1}
          >
            &lt; Prev
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 ${
                currentPage === index + 1 ? "text-blue-500" : "text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`mx-2 ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-blue-500"
            }`}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
