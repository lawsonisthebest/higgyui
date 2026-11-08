import type { ComponentProps } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PaginationProps = Omit<ComponentProps<"nav">, "children"> & {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

const control =
  "grid size-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-700 enabled:cursor-pointer enabled:hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:opacity-40";

export const Pagination = ({
  page,
  pageCount,
  onPageChange,
  className = "",
  ...props
}: PaginationProps) => {
  if (pageCount < 1) return null;
  const currentPage = Math.min(Math.max(1, page), pageCount);

  return (
    <nav aria-label="Pagination" {...props} className={`flex items-center gap-3 text-sm text-neutral-950 ${className}`}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={control}
      >
        <ChevronLeft aria-hidden="true" size={17} strokeWidth={1.8} />
      </button>
      <span aria-live="polite" className="tabular-nums">Page {currentPage} of {pageCount}</span>
      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
        className={control}
      >
        <ChevronRight aria-hidden="true" size={17} strokeWidth={1.8} />
      </button>
    </nav>
  );
};
