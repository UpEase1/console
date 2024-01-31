"use client"

import { ColumnDef } from "@tanstack/react-table"

import AttendanceInfoComponent from "@/app/(dashboard)/courses/[id]/attendance-info"
import { date } from "zod"
import { AttendanceDate } from "upease/console"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Def = {
    id: string
    name: string
    mail: string
    registration_number: string
    attendance_dates: AttendanceDate[]
}

export const coursestudent_columns: ColumnDef<Def>[] = [
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
    {
        accessorKey: "attendance_dates",
        header: "ATTENDANCE",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <AttendanceInfoComponent studentId={row.original.id} attendance_dates={row.original.attendance_dates} />
            )

        }
    }
]
