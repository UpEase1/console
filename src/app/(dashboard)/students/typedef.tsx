"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import StudentInfo from "./studentinfo";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type infotypes = {
    name: string,
    registration_number: string,
    student_id: string,
    mail: string,
    program: string
    
}



export const columns: ColumnDef<infotypes>[] = [
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
        accessorKey: "program",
        header: "Branch",
    },
    {
        id: "actions",
        cell: ({ row }) => <StudentInfo studentId={row.original.student_id} />,
    },
]