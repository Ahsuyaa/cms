import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate page numbers for pagination
  const generatePageNumbers = () => {
    const maxVisiblePages = 5; // Maximum number of visible page numbers
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(currentPage - halfMaxVisiblePages, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return [...Array(endPage - startPage + 1)].map(
      (_, index) => startPage + index
    );
  };

  // Function to render pagination buttons
  const renderPageButtons = () => {
    const pageNumbers = generatePageNumbers();

    return pageNumbers.map((pageNumber) => (
      <li key={pageNumber}>
        <button
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-1 rounded-md ${
            currentPage === pageNumber
              ? "bg-gray-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {pageNumber}
        </button>
      </li>
    ));
  };

  return (
    <div className="flex justify-center mt-5">
      <ul className="flex items-center space-x-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft />
          </button>
        </li>

        {/* Page Numbers */}
        {renderPageButtons()}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages ? "cursor-not-allowed" : ""
            }`}
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
