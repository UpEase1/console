"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Def = {
    id: string
    name: string
    mail: string
    registration_number: string
}

export const addattendance_columns: ColumnDef<Def>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "registration_number",
        header: "Registration Number",
    },
    {
        accessorKey: "mail",
        header: "Email Id",
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         return (
    //             <AttendanceInfoComponent studentId={row.original.id} courseId={"eb46859b-bc90-4108-a53c-bbdfe169c89a"} />
    //         )

    //     }
    // }
]
