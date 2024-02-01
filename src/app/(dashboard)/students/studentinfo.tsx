"use client"
import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { getStudent } from "@/services/data-fetch";
import useSWR from 'swr';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button';

interface StudentInfoProps {
    studentId: string;
}

const StudentInfoComponent: React.FC<StudentInfoProps> = ({ studentId }) => {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/students/${studentId}`,getStudent,
    {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      })
    
    return (
        <Dialog>
                    <DialogTrigger className=' bg-upease_blue text-white p-1.5 rounded-sm h-7 overflow-ellipsis'>
                        Student Info
                    </DialogTrigger>
                    <DialogContent className='overflow-y-scroll h-4/5 max-w-5xl'>
                        {/* <DialogHeader> */}
                        {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                        {/* <DialogDescription></DialogDescription> */}
                        {/* </DialogHeader> */}
                        <div className="flex flex-row p-2 gap-6">
                            <div>
                                <h2 className=" px-3 font-semibold text-lg">Personal Details :</h2>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Name:</TableCell>
                                            <TableCell>{data?.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">DOB-DD/MM/YYYY</TableCell>
                                            <TableCell>default</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Gender:</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_gender}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Blood Group</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_blood_group}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Nationanlity</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_nationality}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Mother Toungue</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_mother_tongue}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Marital Status</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_marital_status}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Domicile State</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_domicile_state}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Email-ID</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_email_address}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Phone Number:</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_contact_number}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                            <div>
                                <h2 className=" px-3 font-semibold text-lg">Academic Details :</h2>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Academic Year :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_batch}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Department :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_department}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Roll Number :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_roll_number}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Program :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_program}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Student Semester :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_student_semester}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Courses Enrolled :</TableCell>
                                            {/* <TableCell>{data?.properties.enrolledcourses}</TableCell> */}
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Registration Number :</TableCell>
                                            <TableCell>{data?.registration_number}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Application Number :</TableCell>
                                            <TableCell>{data?.properties.extension_0a09fe4eefd047798b49f80aaaecb550_application_number}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Date of Joining :</TableCell>
                                            {/* <TableCell>{data?.properties.dateofjoining}</TableCell> */}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
    );
};

export default StudentInfoComponent;
