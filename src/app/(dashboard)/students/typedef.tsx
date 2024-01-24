"use client"
import { StudentInfo } from "upease/console"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import StudentInfoComponent from "./studentinfo"


export const columns: ColumnDef<StudentInfo>[] = [
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
        cell: ({ row }) => <StudentInfoComponent studentId={row.original.student_id} />,
    },
]