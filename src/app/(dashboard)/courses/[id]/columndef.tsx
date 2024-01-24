"use client"

import { ColumnDef } from "@tanstack/react-table"

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
            const attendance = row.original
            return (
                <Dialog>
                    <DialogTrigger>Show Attendance</DialogTrigger>
                    <DialogContent className=' w-[400px]'>
                        <DialogHeader>
                            <DialogTitle>Attendance Details</DialogTitle>
                            {/* <DialogDescription></DialogDescription> */}
                            <div className="">
                                {attendance.name}
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )

        }
    }
]
