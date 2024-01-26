import Link from 'next/link'
import React from 'react'
import { StudentType, columns } from './typedef'
import { DataTable } from './table'

import { Def, coursestudent_columns } from "./columndef"
import { CourseStudent } from "./coursestudent_table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { getAllStudents, getCourse, getCourseStudents } from '@/services/data-fetch'

export default async function Page({ params }: { params: { id: string } }) {
    const courseDetails = await getCourse({courseId:params.id});
    const courseStudents = await getCourseStudents({courseId:params.id});
    const students = await getAllStudents()

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
                                <DialogContent className=' max-w-5xl h-4/5 overflow-y-scroll'>
                                    <DialogHeader>
                                        <DialogTitle>Add students to {courseDetails.name}</DialogTitle>
                                        {/* <DialogDescription></DialogDescription> */}
                                        <div className="">
                                            <DataTable columns={columns} data={students} course_id={courseDetails.course_id}/>
                                        </div>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div>
                        <CourseStudent columns={coursestudent_columns} data={courseStudents} />
                    </div>
                </div>
            </div>

        </div>
    )
}




