"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format, parseISO } from "date-fns";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const t = (key: string, options?: any) =>
  options?.value instanceof Date
    ? options.value.toLocaleDateString("en-US", { dateStyle: "long" })
    : typeof options?.value === "number"
    ? `${options.value} hours`
    : key;

export enum JobStatus {
  RECOMMENDED = "RECOMMENDED",
  TO_DO = "TO_DO",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  DRAFT = "DRAFT",
}

export enum JobFamily {
  SOIL_WORK = "SOIL_WORK",
  SOWING = "SOWING",
  FERTILIZATION = "FERTILIZATION",
  CROP_CARE = "CROP_CARE",
  HARVESTING = "HARVESTING",
  OTHER = "OTHER",
}

export interface Job {
  id: number;
  jobCategory: {
    name: string;
    family: JobFamily;
  };
  status: JobStatus;
  field: {
    name: string;
  };
  fieldSeason: {
    area: number;
  };
  executionDate: string;
  executionFinishDate?: string;

  totalCost: number;
  time: number;
}

const mockData: Job[] = [
  {
    id: 10,
    jobCategory: { name: "Harvesting", family: JobFamily.HARVESTING },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-07-12T07:00:00Z",
    executionFinishDate: "2025-07-12T11:30:00Z",
    totalCost: 540,
    time: 4.5,
  },
  {
    id: 6,
    jobCategory: { name: "Fertilization", family: JobFamily.FERTILIZATION },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-06-11T07:45:00Z",
    executionFinishDate: "2025-06-11T09:00:00Z",
    totalCost: 220,
    time: 1.25,
  },
  {
    id: 7,
    jobCategory: { name: "Crop Care", family: JobFamily.CROP_CARE },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-06-10T08:00:00Z",
    executionFinishDate: "2025-06-10T10:00:00Z",
    totalCost: 210,
    time: 2,
  },
  {
    id: 6,
    jobCategory: { name: "Fertilization", family: JobFamily.FERTILIZATION },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-05-30T07:45:00Z",
    executionFinishDate: "2025-05-30T09:00:00Z",
    totalCost: 180,
    time: 1.25,
  },
  {
    id: 5,
    jobCategory: { name: "Sowing", family: JobFamily.SOWING },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-05-15T07:30:00Z",
    executionFinishDate: "2025-05-15T11:00:00Z",
    totalCost: 400,
    time: 3.5,
  },
  {
    id: 4,
    jobCategory: { name: "Soil Work", family: JobFamily.SOIL_WORK },
    status: JobStatus.COMPLETED,
    field: { name: "West Plot" },
    fieldSeason: { area: 14.2 },
    executionDate: "2025-05-01T08:00:00Z",
    executionFinishDate: "2025-05-01T10:30:00Z",
    totalCost: 160,
    time: 2.5,
  },
];

export function JobsTable() {
  const columns: ColumnDef<Job>[] = [
    {
      id: "jobCategory",
      accessorKey: "jobCategory.name",
      header: "Job",
    },
    {
      id: "status",
      accessorKey: "status",
      header: "State",
      cell: () => (
        <div className="h-full flex items-center justify-center lg:py-[0.1rem] px-[0.2rem] rounded-sm bg-[#80e5b5]/40 border-[#80e5b5] text-[#80e5b5] border-1">
          Done
        </div>
      ),
    },
    {
      id: "area",
      accessorFn: (row) => `${row.fieldSeason.area.toFixed(2)} Ha`,
      header: "Area",
    },
    {
      id: "family",
      accessorFn: (row) => row.jobCategory.family,
      header: "Family",
      cell: (row) => (
        <JobFamilyBadge family={row.row.original.jobCategory.family} />
      ),
    },
    {
      id: "date",
      accessorFn: (row) =>
        t("utils.longDate", { value: new Date(row.executionDate) }),
      header: "Date",
    },
    {
      id: "totalCost",
      accessorFn: (row) => `${row.totalCost} EUR`,
      header: "Cost",
    },
    {
      id: "duration",
      header: "Duration",
      cell: ({ row }) => {
        const start = row.original.executionDate;
        const end = row.original.executionFinishDate;

        const hourPeriodText =
          start && end
            ? `${format(parseISO(start), "HH:mm")} - ${format(
                parseISO(end),
                "HH:mm"
              )}`
            : "Unknown";

        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{t("utils.duration", { value: row.original.time })}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{hourPeriodText}</p>
            </TooltipContent>
          </Tooltip>
        );
      },
    },
  ];

  return <DataTable columns={columns} data={mockData} />;
}

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  jobsTableBadgeStyle,
  jobsTableHeaderStyle,
  jobsTableRowStyle,
} from "@/config/harvest-mate";

export function DataTable<TData, TValue>({
  columns,
  data,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full rounded-sm md:rounded-md border border-sidebar-border">
      <table className="w-full">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={jobsTableHeaderStyle}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t border-sidebar-border">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={jobsTableRowStyle}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const jobFamilyColorMapping: Record<JobFamily, string> = {
  [JobFamily.SOIL_WORK]: "#8B4513",
  [JobFamily.SOWING]: "#228B22",
  [JobFamily.FERTILIZATION]: "#FFD700",
  [JobFamily.CROP_CARE]: "#B8D53D",
  [JobFamily.HARVESTING]: "#FF8C00",
  [JobFamily.OTHER]: "#1E90FF",
};

export const jobFamilyTitleMapping: Record<JobFamily, string> = {
  [JobFamily.SOIL_WORK]: "Soil work",
  [JobFamily.SOWING]: "Sowing",
  [JobFamily.FERTILIZATION]: "Fertilization",
  [JobFamily.CROP_CARE]: "Crop care",
  [JobFamily.HARVESTING]: "Harvesting",
  [JobFamily.OTHER]: "Other",
};

export function JobFamilyBadge({ family }: { family: JobFamily }) {
  const color = jobFamilyColorMapping[family];

  return (
    <div
      className={jobsTableBadgeStyle}
      style={{
        color: color,
        borderColor: color,
        backgroundColor: `${color}30`,
      }}
    >
      {jobFamilyTitleMapping[family]}
    </div>
  );
}
