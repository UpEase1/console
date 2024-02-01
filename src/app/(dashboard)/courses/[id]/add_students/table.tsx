"use client"
import * as React from "react"
import { Input } from "@/components/ui/input"


import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
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
import { Button } from "@/components/ui/button"
import { getCourse } from "@/services/data-fetch"
import { toast } from "sonner"
import { revalidateClientPath } from "@/lib/revalidate"
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  course_id: string
}

const addToCourse = async (courseId: string, studentId:string) => {
  const url = new URL(`/api/v1/courses/${courseId}/students`, process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL);
  url.searchParams.append('student_ids', studentId);

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


export function DataTable<TData, TValue>({
  columns,
  data,
  course_id,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
      )
    const [rowSelection, setRowSelection] = React.useState({})


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
      columnFilters
    },
  })

  return (
    <div>
        <div className="flex justify-between py-4 mx-4">
        <Input
          placeholder="search name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button className="bg-upease_blue text-white p-2 rounded-sm " onClick={
          async () => {
            try{
              const data = table.getFilteredSelectedRowModel().rows;
            data.forEach(async (obj) => {
              //@ts-ignore
              const studentId = obj.original.student_id;
              await addToCourse(course_id, studentId);
            });
            toast.success("Students added to course")
            revalidateClientPath(`/(dashboard)/courses/${course_id}`);
            }
            catch(error){
              console.error(error)
            toast.error("Couldn't add students to course")
            }  
          }    
        }>Add Student</Button>
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