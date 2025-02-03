import Link from "next/link";
import "./pagination.css";

type PaginationProps = {
    currentPage: number;
    pagesCount: number;
};

export default function Pagination(pagination: PaginationProps) {
    const { currentPage, pagesCount } = pagination;
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    return (
        <div className="pagination-container">
            <Link
                href={`/destinations?page=${currentPage - 1}`}
                className={isFirstPage ? "disabled" : ""}
                aria-disabled={isFirstPage}
            >
                Previous
            </Link>
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
            <Link
                href={`/destinations?page=${currentPage + 1}`}
                className={isLastPage ? "disabled" : ""}
                aria-disabled={isLastPage}
            >
                Next
            </Link>
        </div>
    );
}
