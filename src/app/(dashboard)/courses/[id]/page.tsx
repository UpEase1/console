import Link from 'next/link'
import React from 'react'
import { StudentType, columns } from './typedef'
import { DataTable } from './table'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { getCourse } from '@/services/data-fetch'



async function getData(): Promise<StudentType[]> {
    // Fetch data from your API here.
    return [
        {
            id: '1',
            name: "Karthik Prabhu Bantwal",
            registration: '220968016',
            email: "Karthik.bantwal@learner.manipal.edu",
            branch: "Civil Engineering",
            totalclasses: 22,
            classesattended: 14,
            percent: 85
        },
        {
            id: '2',
            name: "Sri Manikanth Martha",
            registration: '220968016',
            email: "martha.mitmpl2022@learner.manipal.edu",
            branch: "Data Science and Engineering",
            totalclasses: 22,
            classesattended: 14,
            percent: 85
        },
        {
            id: '3',
            name: "Karthik Prabhu Bantwal",
            registration: '220968015',
            email: "Karthik.bantwal@learner.manipal.edu",
            branch: "Civil Engineering",
            totalclasses: 22,
            classesattended: 14,
            percent: 85
        },
        {
            id: '4',
            name: "Karthik Prabhu Bantwal",
            registration: '220966576',
            email: "Karthik.bantwal@learner.manipal.edu",
            branch: "Civil Engineering",
            totalclasses: 22,
            classesattended: 14,
            percent: 85
        },
        {
            id: '5',
            name: "Karthik Prabhu Bantwal",
            registration: '220968016',
            email: "Karthik.bantwal@learner.manipal.edu",
            branch: "Civil Engineering",
            totalclasses: 22,
            classesattended: 14,
            percent: 85
        },

    ]
}

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getData()
    const courseDetails = await getCourse({courseId:params.id});
    return (
        <div className=' px-10'>
            <div className='flex flex-row justify-between'>
                <div className='text-lg'>
                    {courseDetails.name} <br />
                    ID : {params.id}
                </div>
                <div className=' mx-4'>
                    <Link href='../courses'>back</Link>
                </div>
            </div>
            <div>
                <div className=' my-16'>
                    <div className='flex flex-row justify-between'>
                        <div>Student Enrollments</div>
                        <div>
                            <Dialog>
                                <DialogTrigger>Add Students</DialogTrigger>
                                <DialogContent className=''>
                                    <DialogHeader>
                                        {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                                        {/* <DialogDescription></DialogDescription> */}
                                        <div className="">
                                            <DataTable columns={columns} data={data} />
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Registration No</TableHead>
                                    <TableHead>Email Id</TableHead>
                                    {/* <TableHead className="text-right">Amount</TableHead> */}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell className="font-medium">{student.name}</TableCell>
                                        <TableCell>{student.registration}</TableCell>
                                        <TableCell>{student.email}</TableCell>
                                        <TableCell>
                                            <Dialog>
                                                <DialogTrigger>Show Attendance</DialogTrigger>
                                                <DialogContent className=' w-[400px]'>
                                                    <DialogHeader>
                                                        <DialogTitle>Attendance Details</DialogTitle>
                                                        {/* <DialogDescription></DialogDescription> */}
                                                        <div className="">
                                                            Total Classes: {student.totalclasses} <br></br>
                                                            Classes Attended: {student.classesattended} <br></br>
                                                            Attendance Percentage: {student.percent}
                                                        </div>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                        {/* <TableCell className="text-right">{student.totalAmount}</TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

        </div>
    )
}