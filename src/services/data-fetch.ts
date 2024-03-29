import { AttendanceDate, StudentInfo } from "upease/console";
import { CourseInfoSchema, StudentInfoSchema } from "@/types/zod-schemas";
import { z } from "zod";
 
async function getAllCourses() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        id: string,
        name: string,
    }[]>;
}

async function getAllStudents() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/students`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch student data')
    }

    return res.json() as Promise<StudentInfo[]>;
}

async function getCourse({ courseId }: { courseId: string }) {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses/${courseId}`);
    console.log(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses/${courseId}`);
    
    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        course_id: string,
        name: string,
    }>;
}

async function getCourseStudents({ courseId }: { courseId: string }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses/${courseId}/students`);

    console.log("Fetching enrolled student data for ID:");

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        id: string,
        name: string,
        mail: string,
        registration_number: string,
    }[]>;
}

async function getAnnouncements(token: string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/routines/announcements`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!res.ok) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    const announcements = data.map((announcement: any) => ({ 
        subject: announcement.subject, 
        content: announcement.body.content 
    })); 


    return announcements as Promise<{ 
        subject: string, 
        content: string 
    }[]>; 

}

async function postAnnouncement(announcementData: FormData, token: string){
    // Todo Change target group mails data later.
    announcementData.append("target_group_mails", "Advanced_Flight_Mechanics@v2tzs.onmicrosoft.com")

    // Do not add content-type here for boundary error.
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/routines/announcements`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: announcementData,
    })

    if(!res.ok) {
        console.dir(JSON.stringify(await res.json()));
    }

    return res.json() as Promise<null>
}


async function getInsights(url: string) {
    const res = await fetch(url,
    //     {
    //     headers: {
    //         "Content-Type": "application/json",
    //       },
    // }
    );
    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<string>;

}

async function getStudent(url:string) {
    const res =  await fetch(url);

    console.log("Fetching student data for ID:");

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        name: string,
    registration_number: number,
    id: string
    properties: {
        extension_0a09fe4eefd047798b49f80aaaecb550_student_email_address: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_contact_number: string
        extension_0a09fe4eefd047798b49f80aaaecb550_mahe_virtual_bank_ifsc_code: string
        extension_0a09fe4eefd047798b49f80aaaecb550_mahe_virtual_bank_account_number: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_domicile_state: string,
        extension_0a09fe4eefd047798b49f80aaaecb550_student_marital_status: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_mother_tongue: string,
        extension_0a09fe4eefd047798b49f80aaaecb550_student_nationality: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_blood_group: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_gender: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_semester: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_department: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_program: string
        extension_0a09fe4eefd047798b49f80aaaecb550_student_batch: number
        extension_0a09fe4eefd047798b49f80aaaecb550_application_number: number
        extension_0a09fe4eefd047798b49f80aaaecb550_student_roll_number: number
        extension_0a09fe4eefd047798b49f80aaaecb550_registration_number: number
    }
    }>;
}


async function getCourseAttendance(url:string) {
    const res =  await fetch(url);

    console.log("Fetching attendance data for ID:");

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<[{
        student_name: string,
        student_id: string,
        attendance_dates: AttendanceDate[],
    }]>;
}

async function addStudent(data: z.infer<typeof StudentInfoSchema>){
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/students`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
       throw new Error(res.statusText)
    }


    return res.json() as Promise<{
        password: string,
        mail: string,
        student_id: string,
    }>
}

async function addCourse(data: z.infer<typeof CourseInfoSchema>){
    const res = await fetch(`${process.env.NEXT_PUBLIC_UPEASE_UNIFIED_API_URL}/api/v1/courses`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        // response status is not 2xx
        throw new Error("Submitting form failed!");
    }
    
    return res.json() as Promise<{
        password: string,
        mail: string,
        student_id: string,
    }>
}

export { getAllCourses, getCourseStudents, getCourse, getAllStudents, getInsights, getStudent, addStudent, addCourse, getCourseAttendance, getAnnouncements, postAnnouncement };
