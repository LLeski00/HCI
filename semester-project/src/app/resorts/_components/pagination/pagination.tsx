"use client";

import "./pagination.css";
import { useState } from "react";

type PaginationProps = {
    initialPage: number;
    pagesCount: number;
    onChange: (page: number) => void;
};

export default function Pagination(pagination: PaginationProps) {
    const { initialPage, pagesCount, onChange } = pagination;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    const goToPage = (page: number) => {
        if (page >= 1 && page <= pagesCount) {
            setCurrentPage(page);
            onChange(page);

            const newUrl = page === 1 ? "/resorts" : `/resorts?page_${page}`;
            window.history.pushState({}, "", newUrl);
        }
    }

    return (
        <div className="pagination-container">
            <button
                onClick={() => goToPage(currentPage - 1)}
                className={isFirstPage ? "disabled" : ""}
                aria-disabled={isFirstPage}
            >
                Previous
            </button>
            <p>
                Page{" "}
                <span>
                    {currentPage}
                </span>{" "}
                of{" "}
                <span>
                    {pagesCount}
                </span>
            </p>
            <button
                onClick={() => goToPage(currentPage + 1)}
                className={isLastPage ? "disabled" : ""}
                aria-disabled={isLastPage}
            >
                Next
            </button>
        </div>
    );
}