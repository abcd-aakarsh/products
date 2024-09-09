import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Create an array of page numbers based on the total number of pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination text-black">
      <ul className="flex gap-2 justify-center text-black  mt-5">
        {/* Previous button */}
        <li>
          <button
            className={`px-4 py-2 text-black rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-button-color text-white"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`px-4 py-2 rounded ${
                page === currentPage
                  ? "bg-button-color text-white"
                  : "bg-white text-black border"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-button-color text-white"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
