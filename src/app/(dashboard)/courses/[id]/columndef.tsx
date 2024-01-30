"use client"

import { ColumnDef } from "@tanstack/react-table"

import { getCourseAttendance } from "@/services/data-fetch"
import AttendanceInfoComponent from "./attendanceinfo"
import { Console } from "console"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Def = {
    id: string
    name: string
    mail: string
    registration_number: string
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
        id: "actions",
        cell: ({ row }) => {
            return (
                <AttendanceInfoComponent studentId={row.original.id} courseId={"eb46859b-bc90-4108-a53c-bbdfe169c89a"} />
            )

        }
    }
]
