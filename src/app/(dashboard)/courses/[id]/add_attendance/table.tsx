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
import React from "react"
import { DatePickerDemo } from "@/components/ui/date-picker-custom"
import { Button } from "@/components/ui/button"
import { getCourse } from "@/services/data-fetch"


const addattendance = async (courseId: string) => {
    const url = new URL(`/api/v1/courses/${courseId}/attendance`, process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL);
  
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({  }),
    };
    try {
      const res = await fetch(url.toString(), requestOptions);
  
      if (!res.ok) {
        // If response status is not ok, throw an error
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const resData = await res.json();
      console.log(resData);
    } catch (error) {
      console.error(error);
    }
    
  
  };

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
        <DatePickerDemo />
        <Button onClick={
          async () => {
            const data = table.getFilteredSelectedRowModel().rows;
            const courseid = await getCourse({courseId: course_id});
            // data.forEach(async (obj) => {
            //   const studentId = obj.original.student_id;
            //   await addtocourse(course_id, studentId);
            // });
          }
        }>Add Student</Button>
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
        <Button>Add Attendance</Button>
      </Table>
    </div>
    </div>
    
  )
}
