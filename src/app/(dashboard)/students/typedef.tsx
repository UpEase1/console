"use client"

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
export type infotypes = {
    id: string
    name: string
    dob: string
    registration: string
    email: string
    branch: string
    gender: string
    bloodgroup: string
    nationality: string
    admission_category: string
    social_category: string
    mothertongue: string
    maritalstatus: string
    domicile: string
    phone: string
    academicyear: string
    department: string
    rollno: string
    program: string
    semester: string
    enrolledcourses: string[]
    Applicationno: string
    dateofjoining: string
}

type DisplayDetailsAction = {
    type: "DISPLAY_DETAILS"
    student: infotypes
}

export const columns: ColumnDef<infotypes>[] = [
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