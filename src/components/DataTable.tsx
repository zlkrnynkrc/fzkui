import React from "react";
import { cn } from "../lib/utils";
import { DataTableProps, Width } from "./layout/types";

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  className,
  width = Width.Full,
  height,
  borderStyle,
  borderRadius,
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-auto",
        width,
        height,
        borderStyle,
        borderRadius,
        className
      )}
    >
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns.map((column) => (
              <th
                key={column.key}
                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {data.length ? (
            data.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {columns.map((column) => (
                  <td
                    key={`cell-${column.key}-${rowIndex}`}
                    className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="h-24 text-center">
                No results.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
