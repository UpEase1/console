"use client"

import React, { useEffect } from 'react';
import useSWR from 'swr';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { usePathname } from 'next/navigation'

import { getCourseAttendance, getStudent } from "@/services/data-fetch";
import { AttendanceDate } from 'upease/console';

// Constants
const { NEXT_PUBLIC_UPEASE_UNIFIED_API_URL } = process.env;

// Type Defs
interface AttendanceInfoProps {
    studentId: string;
    attendance_dates: AttendanceDate[];
}

const AttendanceInfoComponent: React.FC<AttendanceInfoProps> = ({ studentId, attendance_dates }) => {

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
                    {
                            <ul>
                                {attendance_dates.map((dateObj, dateIndex) => (
                                    <li key={dateIndex}>
                                        Date: {Object.keys(dateObj)[0]}, Status: {Object.values(dateObj)[0]}
                                    </li>
                                ))}
                            </ul>
                    }
                    {/* {console.log(match(studentId))}; */}

                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AttendanceInfoComponent;
