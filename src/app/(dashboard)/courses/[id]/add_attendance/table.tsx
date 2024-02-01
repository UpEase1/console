"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import React, { use, useEffect } from "react"
import { DatePickerDemo } from "@/components/ui/date-picker-custom"
import { Button } from "@/components/ui/button"
import { getCourse } from "@/services/data-fetch"
import { AttendanceDate } from "upease/console"
import { toast } from "sonner"
import { revalidateClientPath } from "@/lib/revalidate"

type CreateAttendanceData = {
  id: string;
  student_name: string;
}



interface AddAttendanceProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  course_id: string
}

export function AddAttendance<TData, TValue>({
  columns,
  data,
  course_id,
}: AddAttendanceProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      rowSelection,
    },
  })
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  /**
   * 
   * @param courseId 
   * @param data - present students
   * @param otherData - absent students
   */
  const handleClick = async (courseId: string, data: CreateAttendanceData[], otherData: CreateAttendanceData[]) => {
    if (date === undefined) {
      toast.error("Please select a date");
      return;
    }

    const finalDate = "".concat(date.getFullYear().toString(), "-", (date.getMonth() + 1).toString().padStart(2, '0'), "-", date.getDate().toString().padStart(2, '0'));

    data = data.map((student) => {
      return {
        ...student,
        "assignments": [],
        attendance_dates: [
          {
            [finalDate]: "P"
          }
        ],
      }
    })
    otherData = otherData.map((student) => {
      return {
        ...student,
        "assignments": [],
        attendance_dates: [
          {
            [finalDate]: "A"
          }
        ],
      }
    })
    const finalData = data.concat(otherData);


    const url = new URL(`/api/v1/courses/courses/${courseId}/attendance`, process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL);
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    };
    try {
      const res = await fetch(url.toString(), requestOptions);

      if (!res.ok) {
        // If response status is not ok, throw an error
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      toast.success("Attendance added successfully");
      revalidateClientPath(`/(dashboard)/courses/${courseId}`);
    } catch (error) {
      if (error instanceof Error)
        toast.error(error.message);
    }

  };

  return (
    <div>
      <div>
        <div className="flex items-center py-4">
          <Input
            placeholder="Search Students..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DatePickerDemo date={date} setDate={setDate} />
          <Button className="bg-upease_blue" onClick={
            async () => {
              const data = table.getFilteredSelectedRowModel().rows;
              const otherData = table.getFilteredRowModel().rows;
              // console.log("present", data);
              // console.log("absent", otherData.filter((student) => !data.includes(student)));

              await handleClick(course_id, data.map((row) => {
                return {
                  //@ts-ignore
                  id: row.original.id,
                  //@ts-ignore
                  student_name: row.original.name,
                }
              }),
                otherData.filter((student) => !data.includes(student)).map((row) => {
                  return {
                    //@ts-ignore
                    id: row.original.id,
                    //@ts-ignore
                    student_name: row.original.name,
                  }
                }))
            }}>Add Attendance</Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))

            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>

  )
}
