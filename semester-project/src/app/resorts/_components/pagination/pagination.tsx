"use client";

import "./pagination.css";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination(pagination: PaginationProps) {
    const { currentPage, totalPages, onPageChange } = pagination;
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className="pagination-container">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                className={isFirstPage ? "disabled" : ""}
                aria-disabled={isFirstPage}
                disabled={isFirstPage}
            >
                Previous
            </button>
            <p>
                Page <span>{currentPage}</span> of <span>{totalPages}</span>
            </p>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                className={isLastPage ? "disabled" : ""}
                aria-disabled={isLastPage}
                disabled={isLastPage}
            >
                Next
            </button>
        </div>
    );
}