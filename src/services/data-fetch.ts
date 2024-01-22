import { StudentInfo } from "upease/console";

const BASIC_URL = 'http://127.0.0.1:8000'



async function getAllCourses() {
    const res = await fetch(`${BASIC_URL}/api/v1/courses`);

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
    const res = await fetch(`${BASIC_URL}/api/v1/students`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch student data')
    }

    return res.json() as Promise<StudentInfo[]>;
}

async function getCourse({ courseId }: { courseId: string }) {
    const res =  await fetch(`${BASIC_URL}/api/v1/courses/${courseId}`);

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
    console.log(courseId);
    const res = await fetch(`${BASIC_URL}/api/v1/courses/${courseId}/students`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        id: string,
        name: string,
        mail: string,
    }[]>;
}

async function getAnnouncements(){
    const res = await fetch(`${BASIC_URL}/api/v1/routines/announcements`);

    if(!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json() as Promise<{}[]>
}

async function postAnnouncement(announcementData: FormData){
    // Todo Change this static data later.
    // Todo Check how to get the token.
    announcementData.append("target_group_mails", "Advanced_Flight_Mechanics@v2tzs.onmicrosoft.com")

    const res = await fetch(`${BASIC_URL}/api/v1/announcements`, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        },
        body: announcementData,
    })

    if(!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json() as Promise<null>
}

async function addStudent(studentData: {
    student_data: string, 
    position: string, 
    registration_number: number,
    properties: object
    // optional parameters
}){
    const res = await fetch(`${BASIC_URL}/api/v1/students`, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    })

    if(!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json() as Promise<{
        password: string,
        mail: string,
        student_id: string,
    }>
}

export { getAllCourses, getCourseStudents, getCourse, getAllStudents, postAnnouncement }