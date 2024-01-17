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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<StudentInfo>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "registration",
        header: "Registration Number",
    },
    {
        accessorKey: "email",
        header: "Email Id",
    },
    {
        accessorKey: "branch",
        header: "Branch",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const studentdata = row.original
            return (
                <Dialog>
                    <DialogTrigger>Student Info</DialogTrigger>
                    <DialogContent className=''>
                        <DialogHeader>
                            {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                            {/* <DialogDescription></DialogDescription> */}
                            <div className="">
                                {studentdata.phone}
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )
        },
    },
]