"use client"

import React, { useEffect } from 'react';
import useSWR from 'swr';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { usePathname } from 'next/navigation'

import { getCourseAttendance, getStudent } from "@/services/data-fetch";

// Constants
const { NEXT_PUBLIC_UPEASE_UNIFIED_API_URL } = process.env;

// Type Defs
interface AttendanceInfoProps {
    studentId: string;
    courseId: string;
}

const AttendanceInfoComponent: React.FC<AttendanceInfoProps> = ({ studentId }) => {
    const courseId = usePathname().split("/")[2];

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses/courses/${courseId}/attendance`, 
        getCourseAttendance
    )


    const match = (studentId: string) => {
        if (data) {
            // Use filter on data
            const filteredData = data.filter(obj => obj.student_id === studentId);
            return filteredData;
        } else {
            return [];
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger className="bg-upease_blue text-white px-2 py-1 rounded-sm ">Attendance Info</DialogTrigger>
                <DialogContent>
                    {/* <DialogHeader> */}
                    {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                    {/* <DialogDescription></DialogDescription> */}
                    {/* </DialogHeader> */}
                    {/* {console.log(data)} */}
                    {match(studentId).map((obj, index: number) => (
                        <div key={index}>
                            <ul>
                                {obj.attendance_dates.map((dateObj, dateIndex) => (
                                    <li key={dateIndex}>
                                        Date: {Object.keys(dateObj)[0]}, Status: {dateObj[Object.keys(dateObj)[0]]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* {console.log(match(studentId))}; */}

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AttendanceInfoComponent;
