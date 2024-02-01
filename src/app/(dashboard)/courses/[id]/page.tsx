import Link from 'next/link'
import React from 'react'
import { columns as addStudentColumns } from './add_students/columndef'
import { DataTable } from './add_students/table'

import { Def, coursestudent_columns } from "./columndef"
import { CourseStudentTable } from "./table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { getAllStudents, getCourse, getCourseAttendance, getCourseStudents } from '@/services/data-fetch'
import { addattendance_columns } from './add_attendance/columndef'
import { AddAttendance } from './add_attendance/table'
import { toast } from 'sonner'

export default async function Page({ params }: { params: { id: string } }) {
    const courseId = params.id;
    const courseDetails = await getCourse({ courseId });
    const courseStudentsWithoutAttendance = await getCourseStudents({ courseId });
    const courseAttendance = await getCourseAttendance(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses/courses/${courseId}/attendance`)
    const courseStudents = courseStudentsWithoutAttendance.map((student) => {
        return {
            ...student,
            attendance_dates: courseAttendance.filter((attendance) => attendance.student_id === student.id)[0]?.attendance_dates ?? []
        }
    })
    
    const allStudents = await getAllStudents();
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
                        <div className='flex gap-3'>
                            <Dialog>
                                <DialogTrigger className="bg-upease_blue text-white p-2 rounded-sm ">Add Attendance</DialogTrigger>
                                <DialogContent className=' max-w-5xl h-4/5 overflow-y-scroll'>
                                    <DialogHeader>
                                        <DialogTitle>Add Attendance</DialogTitle>
                                        {/* <DialogDescription></DialogDescription> */}
                                        <div className="">
                                            <AddAttendance columns={addattendance_columns} data={courseStudentsWithoutAttendance} course_id={params.id} />
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger className="bg-upease_blue text-white p-2 rounded-sm " >Add Students</DialogTrigger>
                                <DialogContent className=' max-w-5xl h-4/5 overflow-y-scroll'>
                                    <DialogHeader>
                                        <DialogTitle>Add students to {courseDetails.name}</DialogTitle>
                                        {/* <DialogDescription></DialogDescription> */}
                                        <div className="">
                                            <DataTable columns={addStudentColumns} data={allStudents} course_id={courseDetails.course_id} />
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div>
                        <CourseStudentTable columns={coursestudent_columns} data={courseStudents} />
                    </div>
                </div>
            </div>

        </div>
    )
}





