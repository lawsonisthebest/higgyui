import type { ComponentProps, ReactNode } from "react";

export type TableProps = Omit<ComponentProps<"table">, "children"> & {
  caption: string;
  columns: { id: string; title: string; align?: "left" | "right" }[];
  rows: { id: string; cells: Record<string, ReactNode> }[];
  emptyMessage?: string;
};

export const Table = ({
  caption,
  columns,
  rows,
  emptyMessage = "No results.",
  className = "",
  ...props
}: TableProps) => (
  <div className="w-full overflow-x-auto rounded-lg border border-neutral-200 bg-white">
    <table {...props} className={`w-full text-sm text-neutral-950 ${className}`}>
      <caption className="sr-only">{caption}</caption>
      <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-600">
        <tr>
          {columns.map(({ id, title, align }) => (
            <th key={id} scope="col" className={`px-4 py-3 font-medium ${align === "right" ? "text-right" : "text-left"}`}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-200">
        {rows.map(({ id, cells }) => (
          <tr key={id} className="hover:bg-neutral-50">
            {columns.map((column) => (
              <td key={column.id} className={`px-4 py-3 ${column.align === "right" ? "text-right" : "text-left"}`}>
                {cells[column.id]}
              </td>
            ))}
          </tr>
        ))}
        {rows.length === 0 && (
          <tr>
            <td colSpan={columns.length || 1} className="px-4 py-6 text-center text-neutral-600">{emptyMessage}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);
