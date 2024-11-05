import { ResumeDataTechnology } from "@/data";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

const columns: {
  id: string;
  label: string;
  render: (params: {
    row: ResumeDataTechnology;
    rowIndex: number;
  }) => ReactNode;
  headCellClassName?: string;
  cellClassName?: string;
}[] = [
  {
    id: "num",
    label: "#",
    headCellClassName: "w-0",
    cellClassName: "nowrap",
    render: ({ rowIndex }) => `${rowIndex + 1}`.padStart(2, "0"),
  },
  {
    id: "name",
    label: "name",
    cellClassName: "nowrap",
    render: ({ row }) => <span className="text-text-primary">{row.name}</span>,
  },
  {
    id: "tags",
    label: "tags",
    cellClassName: "text-right",
    render: ({ row }) => {
      return row.tags.join(", ");
    },
  },
];

interface SkillsTableProps extends ComponentProps<"table"> {
  data: ResumeDataTechnology[];
}

const SkillsTable = ({ data, className, ...props }: SkillsTableProps) => {
  const columnClassName = "pr-5";

  return (
    <table
      className={clsx(
        "font-mono font-medium text-text-tertiary w-full text-sm",
        className
      )}
      {...props}
    >
      <thead>
        <tr>
          {columns.map(({ id, label, cellClassName, headCellClassName }) => {
            return (
              <th
                className={clsx(
                  "text-left font-medium border-b border-border-secondary py-2",
                  columnClassName,
                  cellClassName,
                  headCellClassName
                )}
                key={id}
              >
                {label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                return (
                  <td
                    key={column.id}
                    className={clsx(
                      columnClassName,
                      column.cellClassName,
                      "border-b border-border-primary py-1 h-14"
                    )}
                  >
                    {column.render({ row, rowIndex })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SkillsTable;
